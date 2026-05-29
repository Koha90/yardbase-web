.PHONY: install dev dev-lan build lint preview types

install:
	npm install

dev:
	npm run dev

dev-lan:
	npm run dev -- --host 0.0.0.0

build:
	npm run build

lint:
	npm run lint

preview:
	npm run preview

types:
	npm run styles:types
