#!/bin/bash
set -e
cd "$(dirname "$0")"

prepareDist() {
	npx webpack
}

transferDistFiles() {
	cp -r ./dist/* ../assets
}

prepareDist
transferDistFiles