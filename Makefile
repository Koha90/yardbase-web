.PHONY: install dev dev-lan build lint preview styles-types

install:
	npm install

dev:
	npm run dev

dev-lan:
	npm run dev -- --host 0.0.0.0

styles-types:
	npm run styles:types

build:
	npm run build

lint:
	npm run lint

preview:
	npm run preview

check:
	npm run styles:types
	npm run lint
	npm run test
	npm run build
