export default {
	init(element) {
		if (!element) return null;

		const code = element.querySelector('code');
		if (!code) return null;

		element.classList.add('code-block');

		const ensureHeader = () => {
			let header = element.querySelector('.code-block-header');
			if (!header) {
				header = document.createElement('div');
				header.className = 'code-block-header';
				element.prepend(header);
			}

			let languageChip = header.querySelector('.code-block-language');
			if (!languageChip) {
				languageChip = document.createElement('span');
				languageChip.className = 'code-block-language';
				header.appendChild(languageChip);
			}

			let copyButton = header.querySelector('.code-block-copy');
			if (!copyButton) {
				copyButton = document.createElement('button');
				copyButton.type = 'button';
				copyButton.className = 'code-block-copy';
				copyButton.textContent = 'Copy';
				header.appendChild(copyButton);
			}

			return { header, languageChip, copyButton };
		};

		const formatLanguage = (value) => {
			if (!value) return 'Code';
			return value
				.split('-')
				.map(part => part ? part.charAt(0).toUpperCase() + part.slice(1) : part)
				.join(' ');
		};

		const detectLanguage = () => {
			const classToken = Array.from(code.classList).find(token => token.indexOf('language-') === 0);
			if (classToken) return classToken.replace('language-', '');
			const attrLanguage = code.getAttribute('data-language') || element.getAttribute('data-language');
			return attrLanguage || '';
		};

		const { languageChip, copyButton } = ensureHeader();
		const setLanguageLabel = () => {
			languageChip.textContent = formatLanguage(detectLanguage());
		};

		setLanguageLabel();

		const copyText = async () => {
			const text = code.textContent || '';
			if (!text) return;

			try {
				if (navigator.clipboard && navigator.clipboard.writeText) {
					await navigator.clipboard.writeText(text);
				} else {
					const area = document.createElement('textarea');
					area.value = text;
					area.style.position = 'fixed';
					area.style.opacity = '0';
					document.body.appendChild(area);
					area.select();
					document.execCommand('copy');
					document.body.removeChild(area);
				}

				copyButton.textContent = 'Copied';
				window.setTimeout(() => {
					copyButton.textContent = 'Copy';
				}, 1200);
			} catch (_) {
				copyButton.textContent = 'Failed';
				window.setTimeout(() => {
					copyButton.textContent = 'Copy';
				}, 1200);
			}
		};

		copyButton.addEventListener('click', copyText);

		return {
			refresh() {
				setLanguageLabel();
			},
			destroy() {
				copyButton.removeEventListener('click', copyText);
			}
		};
	}
};

