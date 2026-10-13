---
title: "Integrating diverse corpora for training an endangered language machine translation system"
category: first_author
year: 2025
order: 1
featured: true
venue_short: ComputEL-8
venue: Proceedings of ComputEL-8
excerpt: "Training Amis translation systems from diverse sources, with synthetic English data and a closer look at what helps across translation directions."
citation: '<strong>Hunter Scheppat</strong>, Joshua Hartshorne, Dylan Leddy, Éric Le Ferrand, and Emily Prud’hommeaux. 2025. “Integrating diverse corpora for training an endangered language machine translation system.” <cite>Proceedings of ComputEL-8</cite>, pp. 162–169.'
resources:
  - label: Paper PDF
    url: https://aclanthology.org/2025.computel-main.19.pdf
  - label: ACL Anthology
    url: https://aclanthology.org/2025.computel-main.19/
  - label: Recorded talk
    url: https://ufl.zoom.us/rec/play/7NoaD3Pjkyw1CoIj9roJ0IIflzVe6VQ-llA7aovSK8bVbbbqnQALMXoOGAuFGXqTDWw2LjEpSG0DffzL.1gg9eoxLXaklyZEC?startTime=1741230485000
  - label: Translation demo
    url: https://huggingface.co/spaces/hunterschep/ami-zh-translation
---

We repurpose diverse Amis, English, and Mandarin sources as parallel data for Amis machine translation, and use Mandarin-to-English translation to supplement the limited Amis–English corpus.

We compare OpenNMT and NLLB across translation directions. Synthetic data helps when translating into English, but the effects vary by direction, architecture, and data size. The results make a case for testing multiple training approaches when working with an under-resourced language.
