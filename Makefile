.PHONY: dev build clean

VENV    ?= .venv
MKDOCS   = $(VENV)/bin/mkdocs
ENV      = DISABLE_MKDOCS_2_WARNING=true

# Live-reload dev server. --livereload must be explicit: MkDocs 1.6.1's
# Click CLI has a flag_value bug where the default=True is not honored
# when neither --livereload nor --no-livereload is passed.
dev:
	$(ENV) $(MKDOCS) serve --livereload --dev-addr 127.0.0.1:8000

# Strict build — same check CI runs on every PR.
build:
	$(ENV) $(MKDOCS) build --clean --strict

clean:
	rm -rf site
