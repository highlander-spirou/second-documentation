This is the second version of my documentation page 😢

The first documentation is bloated with documents for my python package and what I've learnt as the developer, so this web page is focus only on the things I learnt

To run crawler: 
`docker run -it --env-file=.env -e "CONFIG=$(cat /path/to/your/config.json | jq -r tostring)" algolia/docsearch-scraper`