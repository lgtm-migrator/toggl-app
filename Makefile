#!make

test:
	# Nothing

deps:
	yarn

format:
	yarn run prettier --config .prettierrc.yaml -w "**/*.{js,jsx,ts,tsx,yml,yaml.md}"

lint: lint-prettier lint-eslint lint-markdown

lint-prettier:
	yarn run prettier --config .prettierrc.yaml -c "**/*.{js,jsx,ts,tsx,yml,yaml.md}"

lint-eslint:
	yarn run eslint . --ext .js,.jsx,.ts,.tsx

lint-markdown:
	yarn run markdownlint-cli2 *.md
