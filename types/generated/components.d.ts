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

export interface LayoutAnalystsGrid extends Schema.Component {
  collectionName: 'components_layout_analysts_grids';
  info: {
    displayName: 'AnalystsGrid';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    blurb: Attribute.RichText;
    AnalystsCards: Attribute.Component<'metadata.analysts', true>;
  };
}

export interface LayoutCircleFeature extends Schema.Component {
  collectionName: 'components_layout_circle_features';
  info: {
    displayName: 'CircleFeature';
  };
  attributes: {
    BackgroundImage: Attribute.Media;
    Content: Attribute.Text;
  };
}

export interface LayoutContentBlock extends Schema.Component {
  collectionName: 'components_layout_content_blocks';
  info: {
    displayName: 'Content Block';
  };
  attributes: {
    Content: Attribute.RichText;
  };
}

export interface LayoutEventDetailsBlock extends Schema.Component {
  collectionName: 'components_layout_event_details_blocks';
  info: {
    displayName: 'Event Details Block';
  };
  attributes: {
    Details: Attribute.Component<'metadata.event-details'>;
    contentTitle: Attribute.String;
    content: Attribute.RichText;
  };
}

export interface LayoutEventList extends Schema.Component {
  collectionName: 'components_layout_event_lists';
  info: {
    displayName: 'Event List';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Content: Attribute.Text;
    events: Attribute.Relation<
      'layout.event-list',
      'oneToMany',
      'api::event.event'
    >;
    Type: Attribute.Enumeration<['list', 'grid']>;
  };
}

export interface LayoutFeatureList extends Schema.Component {
  collectionName: 'components_layout_feature_lists';
  info: {
    displayName: 'FeatureList';
  };
  attributes: {
    Title: Attribute.String;
    FeaturesData: Attribute.Component<'metadata.features', true>;
  };
}

export interface LayoutForm extends Schema.Component {
  collectionName: 'components_layout_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    FormType: Attribute.Enumeration<['contact']>;
    Title: Attribute.String & Attribute.DefaultTo<'Contact Us'>;
    Blurb: Attribute.Text;
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

export interface LayoutMediaThumbnailHero extends Schema.Component {
  collectionName: 'components_layout_media_thumbnail_heroes';
  info: {
    displayName: 'Media Thumbnail Hero';
    icon: '';
    description: '';
  };
  attributes: {
    SmallTextTop: Attribute.String;
    SmallTextBottom: Attribute.String;
    Image: Attribute.Media;
  };
}

export interface LayoutPodcastDetails extends Schema.Component {
  collectionName: 'components_layout_podcast_details';
  info: {
    displayName: 'Podcast Details';
  };
  attributes: {
    ReleaseDate: Attribute.Date;
    DurationInMs: Attribute.BigInteger;
    EpisodeLink: Attribute.String;
    FollowLink: Attribute.String &
      Attribute.DefaultTo<'https://open.spotify.com/show/69X2vr95YCy4oQwGskVbLx'>;
    ShareLink: Attribute.String &
      Attribute.DefaultTo<'https://podcasters.spotify.com/pod/show/22v-research'>;
    Title: Attribute.String;
    Description: Attribute.Text;
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
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.String;
    Blurb: Attribute.Text;
    ImageRight: Attribute.Media;
    ContentLeft: Attribute.RichText;
    Type: Attribute.Enumeration<['singleImage', 'doubleImage']> &
      Attribute.DefaultTo<'singleImage'>;
    imageLeft: Attribute.Media;
  };
}

export interface LayoutReportSummary extends Schema.Component {
  collectionName: 'components_layout_report_summaries';
  info: {
    displayName: 'Report Summary';
    description: '';
  };
  attributes: {
    LeftTitle: Attribute.String & Attribute.DefaultTo<'Bottom Line'>;
    LeftContent: Attribute.RichText;
    RightTitle: Attribute.String;
    RightContent: Attribute.RichText;
    CallOutTitle: Attribute.String;
    CallOutText: Attribute.String;
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

export interface LayoutSpotifyPodcastEmbed extends Schema.Component {
  collectionName: 'components_layout_spotify_podcast_embeds';
  info: {
    displayName: 'Spotify Podcast Embed';
    icon: 'play';
    description: '';
  };
  attributes: {
    EmbedCode: Attribute.Text &
      Attribute.DefaultTo<'<iframe src="https://podcasters.spotify.com/pod/show/22v-research/embed" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>'>;
    Title: Attribute.String;
  };
}

export interface LayoutThreeFourthContent extends Schema.Component {
  collectionName: 'components_layout_three_fourth_contents';
  info: {
    displayName: 'ThreeFourthContent';
  };
  attributes: {
    Title: Attribute.String;
    Content: Attribute.RichText;
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

export interface LayoutVideoDetails extends Schema.Component {
  collectionName: 'components_layout_video_details';
  info: {
    displayName: 'Video Details';
  };
  attributes: {
    ReleaseDate: Attribute.Date;
    DurationInMs: Attribute.BigInteger;
    ShareLink: Attribute.String;
    Title: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface LayoutVideoEmbed extends Schema.Component {
  collectionName: 'components_layout_video_embeds';
  info: {
    displayName: 'Video Embed';
    icon: 'play';
  };
  attributes: {
    EmbedCode: Attribute.Text;
  };
}

export interface LayoutWebinarList extends Schema.Component {
  collectionName: 'components_layout_webinar_lists';
  info: {
    displayName: 'Webinar List';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'Webinars'>;
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

export interface MetadataAnalysts extends Schema.Component {
  collectionName: 'components_metadata_analysts';
  info: {
    displayName: 'Analysts';
  };
  attributes: {
    Name: Attribute.String;
    JobTitle: Attribute.String;
    Image: Attribute.Media;
    Content: Attribute.RichText;
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

export interface MetadataEventDetails extends Schema.Component {
  collectionName: 'components_metadata_event_details';
  info: {
    displayName: 'Event Details';
    description: '';
  };
  attributes: {
    date: Attribute.Date;
    location: Attribute.String;
    details: Attribute.RichText;
    startTime: Attribute.Time;
    endTime: Attribute.Time;
  };
}

export interface MetadataFeatures extends Schema.Component {
  collectionName: 'components_metadata_features';
  info: {
    displayName: 'Features';
  };
  attributes: {
    Title: Attribute.String;
    Content: Attribute.Text;
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
      'layout.analysts-grid': LayoutAnalystsGrid;
      'layout.circle-feature': LayoutCircleFeature;
      'layout.content-block': LayoutContentBlock;
      'layout.event-details-block': LayoutEventDetailsBlock;
      'layout.event-list': LayoutEventList;
      'layout.feature-list': LayoutFeatureList;
      'layout.form': LayoutForm;
      'layout.hero': LayoutHero;
      'layout.media-full-content': LayoutMediaFullContent;
      'layout.media-thumbnail-hero': LayoutMediaThumbnailHero;
      'layout.podcast-details': LayoutPodcastDetails;
      'layout.report-list': LayoutReportList;
      'layout.report-section': LayoutReportSection;
      'layout.report-summary': LayoutReportSummary;
      'layout.search-bar': LayoutSearchBar;
      'layout.spotify-podcast-embed': LayoutSpotifyPodcastEmbed;
      'layout.three-fourth-content': LayoutThreeFourthContent;
      'layout.title-text-cta': LayoutTitleTextCta;
      'layout.video-details': LayoutVideoDetails;
      'layout.video-embed': LayoutVideoEmbed;
      'layout.webinar-list': LayoutWebinarList;
      'layout.word-slider': LayoutWordSlider;
      'metadata.analysts': MetadataAnalysts;
      'metadata.basic-slider': MetadataBasicSlider;
      'metadata.event-details': MetadataEventDetails;
      'metadata.features': MetadataFeatures;
      'seo.metadata': SeoMetadata;
    }
  }
}
