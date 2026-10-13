---
title: Software
permalink: /software/
description: "Research software, developer tools, and side projects by Hunter Scheppat: Kakarayan, TAME-MT, Canvas LMS, and more."
---

<p class="eyebrow">Research tools / open source / side quests</p>

Some of this supports my research. Some of it started with “I wonder if…” and got a little out of hand. More code lives on [GitHub](https://github.com/hunterschep).

{% assign projects = site.portfolio | sort: "order" %}
{% for project in projects %}
<article class="project-record">
  <span class="project-number" aria-hidden="true">0{{ forloop.index }}</span>
  <div>
    <h2><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h2>
    <p class="record-meta">{{ project.stack }}</p>
    {{ project.content }}
    {% include resource-links.html links=project.resources %}
  </div>
</article>
{% endfor %}

<aside class="personal-note"><strong>Source & reuse.</strong> Most public work includes a license in its repository. If one is missing, please ask before reusing it.</aside>
