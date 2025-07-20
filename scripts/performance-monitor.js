#!/usr/bin/env node
/**
 * Axiom01 Performance Monitor
 * Tracks bundle sizes, performance metrics, and generates optimization reports
 */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { execSync } = require('child_process');

class PerformanceMonitor {
  constructor() {
    this.thresholds = {
      css: {
        warning: 100, // KB
        error: 200
      },
      js: {
        warning: 150,
        error: 300
      },
      gzip: {
        css: 25,
        js: 50
      }
    };

    this.metrics = {};
  }

  /**
   * Analyze bundle performance
   */
  async analyze() {
    console.log('📊 Analyzing Axiom01 performance...');

    await this.analyzeBundleSizes();
    await this.analyzeLoadTime();
    this.generateReport();
    this.createBudgetConfig();

    console.log('✅ Performance analysis complete!');
  }

  /**
   * Analyze bundle file sizes
   */
  async analyzeBundleSizes() {
    const distDir = './dist';
    const files = [
      'css/axiom-core.css',
      'css/axiom-core.min.css',
      'css/axiom.css',
      'css/axiom.min.css',
      'js/axiom-core.js',
      'js/axiom-core.min.js',
      'js/axiom.js',
      'js/axiom.min.js'
    ];

    for (const file of files) {
      const filePath = path.join(distDir, file);
      if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        const content = fs.readFileSync(filePath);

        // Calculate gzipped size
        const gzipped = zlib.gzipSync(content);

        const fileMetrics = {
          path: file,
          size: stats.size,
          sizeKB: (stats.size / 1024).toFixed(2),
          gzipSize: gzipped.length,
          gzipKB: (gzipped.length / 1024).toFixed(2),
          compressionRatio: ((1 - gzipped.length / stats.size) * 100).toFixed(1)
        };

        this.metrics[file.replace(/[/.]/g, '_')] = fileMetrics;
      }
    }
  }

  /**
   * Analyze load time performance
   */
  async analyzeLoadTime() {
    // Simulated load time analysis (in real implementation, use Lighthouse API)
    const coreCSS = this.metrics['css_axiom-core_min_css'];
    const fullCSS = this.metrics['css_axiom_min_css'];
    const coreJS = this.metrics['js_axiom-core_min_js'];
    const fullJS = this.metrics['js_axiom_min_js'];

    if (coreCSS && coreJS) {
      // Estimate load time based on file sizes (simplified calculation)
      // Assumes 3G connection (1.6 Mbps = 200 KB/s)
      const connectionSpeed = 200; // KB/s

      const coreLoadTime = (parseFloat(coreCSS.gzipKB) + parseFloat(coreJS.gzipKB)) / connectionSpeed * 1000;
      const fullLoadTime = (parseFloat(fullCSS.gzipKB) + parseFloat(fullJS.gzipKB)) / connectionSpeed * 1000;

      this.metrics.loadTime = {
        core: Math.round(coreLoadTime),
        full: Math.round(fullLoadTime),
        savings: Math.round(fullLoadTime - coreLoadTime)
      };
    }
  }

  /**
   * Generate performance report
   */
  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: this.generateSummary(),
      bundleAnalysis: this.analyzeBundles(),
      recommendations: this.generateRecommendations(),
      metrics: this.metrics
    };

    // Write JSON report
    fs.writeFileSync('./performance-report.json', JSON.stringify(report, null, 2));

    // Write human-readable report
    this.writeHumanReport(report);

    console.log('📄 Performance report generated');
  }

  /**
   * Generate performance summary
   */
  generateSummary() {
    const coreCSS = parseFloat(this.metrics['css_axiom-core_min_css']?.gzipKB || 0);
    const fullCSS = parseFloat(this.metrics['css_axiom_min_css']?.gzipKB || 0);
    const coreJS = parseFloat(this.metrics['js_axiom-core_min_js']?.gzipKB || 0);
    const fullJS = parseFloat(this.metrics['js_axiom_min_js']?.gzipKB || 0);

    return {
      totalSize: {
        core: (coreCSS + coreJS).toFixed(2) + ' KB',
        full: (fullCSS + fullJS).toFixed(2) + ' KB'
      },
      loadTime: this.metrics.loadTime,
      grade: this.calculateGrade()
    };
  }

  /**
   * Analyze individual bundles
   */
  analyzeBundles() {
    const analysis = {};

    Object.entries(this.metrics).forEach(([key, metrics]) => {
      if (metrics.path) {
        const type = metrics.path.includes('.css') ? 'css' : 'js';
        const size = parseFloat(metrics.sizeKB);
        const gzipSize = parseFloat(metrics.gzipKB);

        analysis[key] = {
          ...metrics,
          status: this.getBundleStatus(type, size),
          gzipStatus: this.getGzipStatus(type, gzipSize),
          optimizationPotential: this.getOptimizationPotential(metrics)
        };
      }
    });

    return analysis;
  }

  /**
   * Get bundle status based on thresholds
   */
  getBundleStatus(type, size) {
    const thresholds = this.thresholds[type];
    if (size > thresholds.error) return 'error';
    if (size > thresholds.warning) return 'warning';
    return 'good';
  }

  /**
   * Get gzip status
   */
  getGzipStatus(type, gzipSize) {
    const threshold = this.thresholds.gzip[type];
    return gzipSize > threshold ? 'warning' : 'good';
  }

  /**
   * Calculate optimization potential
   */
  getOptimizationPotential(metrics) {
    const compressionRatio = parseFloat(metrics.compressionRatio);
    const size = parseFloat(metrics.sizeKB);

    let potential = 'low';
    if (compressionRatio < 60) potential = 'high';
    else if (compressionRatio < 70) potential = 'medium';

    return {
      level: potential,
      compressionRatio: compressionRatio + '%',
      suggestions: this.getOptimizationSuggestions(metrics)
    };
  }

  /**
   * Get optimization suggestions
   */
  getOptimizationSuggestions(metrics) {
    const suggestions = [];
    const compressionRatio = parseFloat(metrics.compressionRatio);
    const path = metrics.path;

    if (compressionRatio < 60) {
      suggestions.push('Consider additional minification');
    }

    if (path.includes('.css') && parseFloat(metrics.sizeKB) > 100) {
      suggestions.push('Consider splitting CSS into critical and non-critical');
      suggestions.push('Remove unused CSS rules');
    }

    if (path.includes('.js') && parseFloat(metrics.sizeKB) > 150) {
      suggestions.push('Implement code splitting');
      suggestions.push('Consider tree shaking');
    }

    return suggestions;
  }

  /**
   * Generate recommendations
   */
  generateRecommendations() {
    const recommendations = [];
    const fullCSS = parseFloat(this.metrics['css_axiom_min_css']?.sizeKB || 0);
    const fullJS = parseFloat(this.metrics['js_axiom_min_js']?.sizeKB || 0);

    // CSS recommendations
    if (fullCSS > this.thresholds.css.warning) {
      recommendations.push({
        type: 'css',
        priority: 'high',
        title: 'Optimize CSS Bundle Size',
        description: `CSS bundle is ${fullCSS}KB. Consider implementing critical CSS extraction and removing unused styles.`,
        actions: [
          'Extract critical CSS for above-the-fold content',
          'Implement CSS purging to remove unused styles',
          'Consider component-level CSS splitting'
        ]
      });
    }

    // JavaScript recommendations
    if (fullJS > this.thresholds.js.warning) {
      recommendations.push({
        type: 'js',
        priority: 'high',
        title: 'Optimize JavaScript Bundle Size',
        description: `JavaScript bundle is ${fullJS}KB. Consider implementing code splitting and tree shaking.`,
        actions: [
          'Implement dynamic imports for components',
          'Use tree shaking to eliminate dead code',
          'Consider lazy loading for non-critical components'
        ]
      });
    }

    // Load time recommendations
    if (this.metrics.loadTime?.full > 1000) {
      recommendations.push({
        type: 'performance',
        priority: 'medium',
        title: 'Improve Load Time',
        description: `Estimated load time is ${this.metrics.loadTime.full}ms on 3G connection.`,
        actions: [
          'Implement resource preloading',
          'Use HTTP/2 server push for critical resources',
          'Consider service worker caching strategy'
        ]
      });
    }

    return recommendations;
  }

  /**
   * Calculate overall performance grade
   */
  calculateGrade() {
    const coreCSS = parseFloat(this.metrics['css_axiom-core_min_css']?.gzipKB || 0);
    const coreJS = parseFloat(this.metrics['js_axiom-core_min_js']?.gzipKB || 0);
    const totalCore = coreCSS + coreJS;

    if (totalCore < 30) return 'A';
    if (totalCore < 50) return 'B';
    if (totalCore < 75) return 'C';
    if (totalCore < 100) return 'D';
    return 'F';
  }

  /**
   * Write human-readable report
   */
  writeHumanReport(report) {
    let humanReport = `# Axiom01 Performance Report
Generated: ${new Date().toLocaleDateString()}

## Summary
- **Core Bundle Size**: ${report.summary.totalSize.core} (gzipped)
- **Full Bundle Size**: ${report.summary.totalSize.full} (gzipped)
- **Performance Grade**: ${report.summary.grade}
- **Estimated Load Time (3G)**: ${report.summary.loadTime?.core || 'N/A'}ms (core), ${report.summary.loadTime?.full || 'N/A'}ms (full)

## Bundle Analysis
`;

    Object.entries(report.bundleAnalysis).forEach(([key, analysis]) => {
      humanReport += `
### ${analysis.path}
- **Size**: ${analysis.sizeKB} KB (${analysis.gzipKB} KB gzipped)
- **Compression**: ${analysis.compressionRatio}%
- **Status**: ${analysis.status} ${analysis.gzipStatus === 'warning' ? '⚠️' : '✅'}
- **Optimization Potential**: ${analysis.optimizationPotential.level}
`;

      if (analysis.optimizationPotential.suggestions.length > 0) {
        humanReport += '- **Suggestions**: ' + analysis.optimizationPotential.suggestions.join(', ') + '\n';
      }
    });

    if (report.recommendations.length > 0) {
      humanReport += '\n## Recommendations\n';
      report.recommendations.forEach((rec, index) => {
        humanReport += `
### ${index + 1}. ${rec.title} (${rec.priority} priority)
${rec.description}

**Actions:**
${rec.actions.map(action => `- ${action}`).join('\n')}
`;
      });
    }

    fs.writeFileSync('./performance-report.md', humanReport);
    console.log('📝 Human-readable report written to performance-report.md');
  }

  /**
   * Create performance budget configuration
   */
  createBudgetConfig() {
    const budget = {
      bundlesize: [
        {
          path: './dist/css/axiom-core.min.css',
          maxSize: '25kb',
          compression: 'gzip'
        },
        {
          path: './dist/css/axiom.min.css',
          maxSize: '50kb',
          compression: 'gzip'
        },
        {
          path: './dist/js/axiom-core.min.js',
          maxSize: '30kb',
          compression: 'gzip'
        },
        {
          path: './dist/js/axiom.min.js',
          maxSize: '75kb',
          compression: 'gzip'
        }
      ]
    };

    fs.writeFileSync('./performance-budget.json', JSON.stringify(budget, null, 2));
    console.log('💰 Performance budget configuration created');
  }

  /**
   * Run performance checks
   */
  async runChecks() {
    console.log('🔍 Running performance checks...');

    const results = {
      passed: [],
      failed: [],
      warnings: []
    };

    // Check bundle sizes against thresholds
    Object.entries(this.metrics).forEach(([key, metrics]) => {
      if (metrics.path && metrics.path.includes('min.')) {
        const type = metrics.path.includes('.css') ? 'css' : 'js';
        const size = parseFloat(metrics.sizeKB);
        const gzipSize = parseFloat(metrics.gzipKB);

        const check = {
          file: metrics.path,
          size: size,
          gzipSize: gzipSize,
          threshold: this.thresholds[type]
        };

        if (size > this.thresholds[type].error) {
          results.failed.push({...check, reason: 'Size exceeds error threshold'});
        } else if (size > this.thresholds[type].warning) {
          results.warnings.push({...check, reason: 'Size exceeds warning threshold'});
        } else {
          results.passed.push({...check, reason: 'Size within acceptable limits'});
        }
      }
    });

    // Output results
    console.log(`✅ Passed: ${results.passed.length}`);
    console.log(`⚠️  Warnings: ${results.warnings.length}`);
    console.log(`❌ Failed: ${results.failed.length}`);

    if (results.warnings.length > 0 || results.failed.length > 0) {
      console.log('\n📋 Issues found:');
      [...results.warnings, ...results.failed].forEach(issue => {
        const icon = issue.size > issue.threshold.error ? '❌' : '⚠️';
        console.log(`${icon} ${issue.file}: ${issue.size}KB (${issue.reason})`);
      });
    }

    return results;
  }
}

// Run performance analysis if called directly
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.analyze().then(() => {
    monitor.runChecks();
  });
}

module.exports = PerformanceMonitor;
