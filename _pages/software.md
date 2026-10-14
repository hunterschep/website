---
title: Software
permalink: /software/
description: "Software projects by Hunter Scheppat."
---

More on [GitHub](https://github.com/hunterschep).

{% assign projects = site.portfolio | sort: "order" %}
{% for project in projects %}
<article class="project-record">
  <h2><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h2>
  <p class="record-meta">{{ project.stack }}</p>
  {{ project.content }}
  {% include resource-links.html links=project.resources %}
</article>
{% endfor %}
