import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.muxa.caption'),
          title: i18n.t('forms.application.sitemap.muxa.title'),
          children: [{
            link: 'i-i-s-muxa-meteo-l',
            caption: i18n.t('forms.application.sitemap.muxa.i-i-s-muxa-meteo-l.caption'),
            title: i18n.t('forms.application.sitemap.muxa.i-i-s-muxa-meteo-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-muxa-city-l',
            caption: i18n.t('forms.application.sitemap.muxa.i-i-s-muxa-city-l.caption'),
            title: i18n.t('forms.application.sitemap.muxa.i-i-s-muxa-city-l.title'),
            children: null
          }, {
            link: 'i-i-s-muxa-home-l',
            caption: i18n.t('forms.application.sitemap.muxa.i-i-s-muxa-home-l.caption'),
            title: i18n.t('forms.application.sitemap.muxa.i-i-s-muxa-home-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }
      ]
    };
  }),
})