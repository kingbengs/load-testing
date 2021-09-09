robots-non-prod:
	cp static/robots-disallow-all.txt static/robots.txt

robots-prod:
	cp static/robots-allow-all.txt static/robots.txt
