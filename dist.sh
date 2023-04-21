#!/bin/bash
set -e
cd "$(dirname "$0")"

prepareDist() {
	npx webpack --config ./webpack.prod.js
}

transferDistFiles() {
	cp -r ./dist/* ../../assets
}

prepareDist
transferDistFiles
