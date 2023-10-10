import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutAboutUsFeature extends Schema.Component {
  collectionName: 'components_layout_about_us_features';
  info: {
    displayName: 'About Us Feature';
    description: '';
  };
  attributes: {
    CTAtext: Attribute.String;
    CTAurl: Attribute.String;
    BGimage: Attribute.Media;
    CircleBGimage: Attribute.Media;
    Logo: Attribute.Media;
  };
}

export interface LayoutHero extends Schema.Component {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media;
    Type: Attribute.Enumeration<
      ['home', 'full', 'threeQuarters', 'postArchive', 'postSingle']
    >;
    Content: Attribute.RichText;
  };
}

export interface LayoutMediaFullContent extends Schema.Component {
  collectionName: 'components_layout_media_full_contents';
  info: {
    displayName: 'Media - Full Content';
  };
  attributes: {
    ImageVideo: Attribute.Media;
    Title: Attribute.String;
    Content: Attribute.RichText;
    MainCTAText: Attribute.String;
    MainCTAurl: Attribute.String;
    SecondaryContent: Attribute.String;
    SecondaryCTAtext: Attribute.String;
    SecondaryCTAurl: Attribute.String;
  };
}

export interface LayoutReportList extends Schema.Component {
  collectionName: 'components_layout_report_lists';
  info: {
    displayName: 'Report Feature';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'From Our Newsroom'>;
    MainCTAtext: Attribute.String & Attribute.DefaultTo<'View Our Reports'>;
    MainCTAurl: Attribute.String;
    reports: Attribute.Relation<
      'layout.report-list',
      'oneToMany',
      'api::report.report'
    >;
    Type: Attribute.Enumeration<['list', 'grid']>;
  };
}

export interface LayoutReportSection extends Schema.Component {
  collectionName: 'components_layout_report_sections';
  info: {
    displayName: 'Report Section';
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.String;
    Blurb: Attribute.Text;
    ImageRight: Attribute.Media;
    ContentLeft: Attribute.RichText;
  };
}

export interface LayoutReportSummary extends Schema.Component {
  collectionName: 'components_layout_report_summaries';
  info: {
    displayName: 'Report Summary';
  };
  attributes: {
    LeftTitle: Attribute.String & Attribute.DefaultTo<'Bottom Line'>;
  };
}

export interface LayoutSearchBar extends Schema.Component {
  collectionName: 'components_layout_search_bars';
  info: {
    displayName: 'SearchBar';
  };
  attributes: {
    Display: Attribute.Boolean;
  };
}

export interface LayoutTitleTextCta extends Schema.Component {
  collectionName: 'components_layout_title_text_ctas';
  info: {
    displayName: 'Title - Text / CTA';
  };
  attributes: {
    Title: Attribute.String;
    Content: Attribute.RichText;
    CTAtext: Attribute.String;
    CTAurl: Attribute.String;
  };
}

export interface LayoutWordSlider extends Schema.Component {
  collectionName: 'components_layout_word_sliders';
  info: {
    displayName: 'Basic Slider';
    description: '';
  };
  attributes: {
    SlideData: Attribute.Component<'metadata.basic-slider', true>;
  };
}

export interface MetadataBasicSlider extends Schema.Component {
  collectionName: 'components_metadata_basic_sliders';
  info: {
    displayName: 'Basic Slider';
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media;
  };
}

export interface SeoMetadata extends Schema.Component {
  collectionName: 'components_seo_metadata';
  info: {
    displayName: 'Metadata';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.about-us-feature': LayoutAboutUsFeature;
      'layout.hero': LayoutHero;
      'layout.media-full-content': LayoutMediaFullContent;
      'layout.report-list': LayoutReportList;
      'layout.report-section': LayoutReportSection;
      'layout.report-summary': LayoutReportSummary;
      'layout.search-bar': LayoutSearchBar;
      'layout.title-text-cta': LayoutTitleTextCta;
      'layout.word-slider': LayoutWordSlider;
      'metadata.basic-slider': MetadataBasicSlider;
      'seo.metadata': SeoMetadata;
    }
  }
}
