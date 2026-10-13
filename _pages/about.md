---
title: "Hi, I’m Hunter."
permalink: /
description: "Hunter Scheppat: NLP researcher, software builder, and Associate Solutions Architect at AWS. Research on machine translation for endangered languages."
---

<p class="eyebrow">Language technology / useful software / other things</p>

I work on machine translation for endangered languages and build software around the research. Most of that work concerns the **Formosan languages of Taiwan**, with the [AI4 Communication Sciences Lab](https://ai4commsci.github.io/) and Dr. Emily Prud’hommeaux.

I’m also an **Associate Solutions Architect at [Amazon Web Services](https://aws.amazon.com/)**. I like working across the whole problem: the data, the models, the tools, and getting something useful into people’s hands.

I graduated *cum laude* from [Boston College](https://www.bc.edu/) in May 2026 with a B.A. in Computer Science and a B.S. in Management. Along the way, I worked on the [Pushkin Project](https://pushkin-consortium.github.io/pushkin/4.2/), taught Data Structures, and served as president of the [Computer Science Society](https://bccss.dev/).

## A couple of papers

{% assign papers = site.publications | where: "featured", true | sort: "order" | reverse %}
{% for paper in papers %}
{% include publication.html item=paper compact=true %}
{% endfor %}

<p class="section-link"><a href="{{ '/research/' | relative_url }}">All publications, talks, and research experience →</a></p>

## Things I’ve built

{% assign projects = site.portfolio | where: "featured", true | sort: "order" %}
<ul class="selected-software">
{% for project in projects %}
  <li><a href="{{ project.url | relative_url }}"><strong>{{ project.title }}</strong></a>. {{ project.excerpt }}</li>
{% endfor %}
</ul>

<p class="section-link"><a href="{{ '/software/' | relative_url }}">More software, including a few side quests →</a></p>

## News & notes

<dl class="news-list">
{% assign internal_link_prefix = 'href="' | append: site.baseurl | append: '/' %}
{% for item in site.data.news %}
  <div>
    <dt><time datetime="{{ item.date }}">{{ item.date }}</time></dt>
    <dd>{{ item.text | replace: 'href="/', internal_link_prefix }}</dd>
  </div>
{% endfor %}
</dl>

## Say hello

Email is easiest: [hunterschep@gmail.com](mailto:hunterschep@gmail.com). You can also find me on [GitHub](https://github.com/hunterschep), [Google Scholar](https://scholar.google.com/citations?user=MsjRFU8AAAAJ&hl=en), [LinkedIn](https://www.linkedin.com/in/hunterscheppat/), and [Hugging Face](https://huggingface.co/hunterschep).
