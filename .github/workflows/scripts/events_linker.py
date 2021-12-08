#!/usr/bin/env python

"""
This file is to fetch the latest event from our
https://gdsc.community.dev/sister-nivedita-university-kolkata/
portal and links with https://<OUR_SITE>/e/latest for easy RSVP.
"""

import requests
from bs4 import BeautifulSoup
from jinja2 import Environment, FileSystemLoader
import urllib.parse
env = Environment(loader=FileSystemLoader('.'))

community = 'https://gdsc.community.dev/sister-nivedita-university-kolkata/'

page = requests.get(community)

if page.status_code != 200:
    exit(-1)

soup = BeautifulSoup(page.text, 'html.parser')

eventSoups = soup.find_all(class_='row event')

if len(eventSoups) < 1:
    exit(0)


eventLink = eventSoups[0].find_all('a', href=True)[0]['href']



template = env.get_template('./.github/workflows/scripts/templates/latest_page.html')
output_from_parsed_template = template.render(url=urllib.parse.urljoin(community, eventLink))
print(output_from_parsed_template)

import pathlib
pathlib.Path('e').mkdir(parents=True, exist_ok=True) 

# to save the results
with open("e/latest.html", "w") as fh:
    fh.write(output_from_parsed_template)