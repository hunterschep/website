---
title: Research
permalink: /research/
description: "Publications, talks, and research experience in low-resource machine translation and endangered-language technology."
---

My research focuses on low-resource machine translation, language documentation, data augmentation, pivot translation, and interactive machine learning.

I work with Dr. Emily Prud’hommeaux at the [AI4 Communication Sciences Lab](https://ai4commsci.github.io/) on the Indigenous languages of Taiwan, supported by an NSF REU grant.

## Publications

<p class="section-link">Also on <a href="{{ site.author.googlescholar }}">Google Scholar</a>.</p>

{% assign papers = site.publications | sort: "order" | reverse %}
{% for category in site.publication_category %}
### {{ category[1].title }}

{% for paper in papers %}
{% if paper.category == category[0] %}
{% include publication.html item=paper %}
{% endif %}
{% endfor %}
{% endfor %}

## Talks

<ul class="talk-list">
{% assign talks = site.talks | sort: "order" | reverse %}
{% for talk in talks %}
  <li>
    <span class="record-date">{{ talk.month }} {{ talk.year }}</span>
    <div><strong>{{ talk.venue }}</strong> · {{ talk.talk_type }}<br><a href="{{ talk.url | relative_url }}">{{ talk.title }}</a></div>
  </li>
{% endfor %}
</ul>

## Research experience

<dl class="experience-list">
  <div><dt>2026–present</dt><dd><strong>Post-graduate research assistant</strong><br>AI4 Communication Sciences Lab · MGH / Boston College / NSF</dd></div>
  <div><dt>2023–present</dt><dd><strong>Research assistant</strong><br>AI4 Communication Sciences Lab · MGH / Boston College / NSF</dd></div>
  <div><dt>2023</dt><dd><strong>Research assistant</strong><br>Pushkin Project · Boston College</dd></div>
</dl>

## Teaching & community

I taught Data Structures and served as president of the [Boston College Computer Science Society](https://bccss.dev/).
