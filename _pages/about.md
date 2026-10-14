---
title: About
permalink: /
description: "Hunter Scheppat. Associate Solutions Architect at AWS and researcher in endangered-language machine translation."
---

I’m an Associate Solutions Architect at [Amazon Web Services](https://aws.amazon.com/) and a researcher working on machine translation for endangered languages. My research focuses on the Formosan languages of Taiwan with Dr. Emily Prud’hommeaux and the [AI4 Communication Sciences Lab](https://ai4commsci.github.io/).

I graduated *cum laude* from [Boston College](https://www.bc.edu/) in 2026 with a B.A. in Computer Science and a B.S. in Management. Previously: [Pushkin Project](https://pushkin-consortium.github.io/pushkin/4.2/), Data Structures teaching, and president of the [Computer Science Society](https://bccss.dev/).

## Selected publications

{% assign papers = site.publications | where: "featured", true | sort: "order" | reverse %}
{% for paper in papers %}
{% include publication.html item=paper compact=true %}
{% endfor %}

<p class="section-link"><a href="{{ '/research/' | relative_url }}">All publications and talks</a></p>

## Software

{% assign projects = site.portfolio | where: "featured", true | sort: "order" %}
<ul class="selected-software">
{% for project in projects %}
  <li><a href="{{ project.url | relative_url }}">{{ project.title }}</a>. {{ project.excerpt }}</li>
{% endfor %}
</ul>

<p class="section-link"><a href="{{ '/software/' | relative_url }}">More projects</a></p>

## News

<dl class="news-list">
{% assign internal_link_prefix = 'href="' | append: site.baseurl | append: '/' %}
{% for item in site.data.news %}
  <div><dt><time datetime="{{ item.date }}">{{ item.date }}</time></dt><dd>{{ item.text | replace: 'href="/', internal_link_prefix }}</dd></div>
{% endfor %}
</dl>
