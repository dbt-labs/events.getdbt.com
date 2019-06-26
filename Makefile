.PHONY: run deploy

run:
	open http://localhost:5018
	jekyll serve --baseurl '' -w --port 5018
