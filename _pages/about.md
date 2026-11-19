---
title: About
permalink: /
hide_title: true
description: "Hunter Scheppat. Associate Solutions Architect at AWS and researcher in endangered-language machine translation."
---

{% include inference-hero.html %}

I’m an Associate Solutions Architect at [Amazon Web Services](https://aws.amazon.com/). I also do research on machine translation for endangered languages.

<dl class="experience-list facts">
  <div><dt>Research</dt><dd>Formosan languages of Taiwan, with Dr. Emily Prud’hommeaux at the <a href="https://ai4commsci.github.io/">AI4 Communication Sciences Lab</a></dd></div>
  <div><dt>Education</dt><dd><a href="https://www.bc.edu/">Boston College</a>, 2026, <em>cum laude</em>. B.A. Computer Science, B.S. Management</dd></div>
  <div><dt>Certified</dt><dd>AWS Solutions Architect Associate, Developer Associate, AI Practitioner, Cloud Practitioner</dd></div>
  <div><dt>Previously</dt><dd><a href="https://pushkin-consortium.github.io/pushkin/4.2/">Pushkin Project</a>, Data Structures teaching, president of the <a href="https://bccss.dev/">Computer Science Society</a></dd></div>
</dl>

## Selected papers

{% assign papers = site.publications | where: "featured", true | sort: "order" | reverse %}
{% for paper in papers %}
{% include publication.html item=paper compact=true %}
{% endfor %}

<p class="section-link"><a href="{{ '/research/' | relative_url }}">All papers and talks</a></p>

## Software

{% assign projects = site.portfolio | where: "featured", true | sort: "order" %}
<ul class="selected-software">
{% for project in projects %}
  <li><a href="{{ project.url | relative_url }}">{{ project.title }}</a>. {{ project.excerpt }}</li>
{% endfor %}
</ul>

<p class="section-link"><a href="{{ '/software/' | relative_url }}">More projects</a></p>

## This year on GitHub

<figure class="contributions">
  <img src="https://ghchart.rshah.org/hunterschep" alt="GitHub contribution chart for hunterschep over the past year" width="663" height="104" loading="lazy">
  <figcaption>Chart by <a href="https://ghchart.rshah.org/">ghchart.rshah.org</a>.</figcaption>
</figure>

## News

<dl class="news-list">
{% assign internal_link_prefix = 'href="' | append: site.baseurl | append: '/' %}
{% for item in site.data.news %}
  <div><dt><time datetime="{{ item.date }}">{{ item.date }}</time></dt><dd>{{ item.text | replace: 'href="/', internal_link_prefix }}</dd></div>
{% endfor %}
</dl>
