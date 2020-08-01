# 開発サーバー起動
.PHONY: start
start:
	yarn start

# ビルド
.PHONY: build
build:
	yarn build

# lint
.PHONY: lint
lint:
	yarn lint

# analyze
.PHONY: analyze
analyze:
	yarn analyze
