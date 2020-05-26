export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ContentfulAsset = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  contentful_id?: Maybe<Scalars['String']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  fixed?: Maybe<ContentfulFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ContentfulResolutions>;
  fluid?: Maybe<ContentfulFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ContentfulSizes>;
  resize?: Maybe<ContentfulResize>;
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'contentful_id'
  | 'file___url'
  | 'file___details___size'
  | 'file___details___image___width'
  | 'file___details___image___height'
  | 'file___fileName'
  | 'file___contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'resize___base64'
  | 'resize___tracedSVG'
  | 'resize___src'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio';

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAuthor = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  blurbTitle?: Maybe<Scalars['String']>;
  blurbLead?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<ContentfulAsset>;
  socialLinks?: Maybe<ContentfulAuthorSocialLinks>;
  page___home?: Maybe<Array<Maybe<ContentfulPageHome>>>;
  page___say_hello?: Maybe<Array<Maybe<ContentfulPageSayHello>>>;
  blurbDesc?: Maybe<ContentfulAuthorBlurbDescTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulAuthorSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulAuthorBlurbDescTextNode?: Maybe<ContentfulAuthorBlurbDescTextNode>;
};


export type ContentfulAuthorCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAuthorUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulAuthorBlurbDescTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  blurbDesc?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulAuthorBlurbDescTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAuthorBlurbDescTextNodeEdge>;
  nodes: Array<ContentfulAuthorBlurbDescTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAuthorBlurbDescTextNodeGroupConnection>;
};


export type ContentfulAuthorBlurbDescTextNodeConnectionDistinctArgs = {
  field: ContentfulAuthorBlurbDescTextNodeFieldsEnum;
};


export type ContentfulAuthorBlurbDescTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAuthorBlurbDescTextNodeFieldsEnum;
};

export type ContentfulAuthorBlurbDescTextNodeEdge = {
  next?: Maybe<ContentfulAuthorBlurbDescTextNode>;
  node: ContentfulAuthorBlurbDescTextNode;
  previous?: Maybe<ContentfulAuthorBlurbDescTextNode>;
};

export type ContentfulAuthorBlurbDescTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'blurbDesc'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___fields___readingTime___text'
  | 'childMarkdownRemark___fields___readingTime___minutes'
  | 'childMarkdownRemark___fields___readingTime___time'
  | 'childMarkdownRemark___fields___readingTime___words'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type ContentfulAuthorBlurbDescTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  blurbDesc?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulAuthorBlurbDescTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAuthorBlurbDescTextNodeEdge>;
  nodes: Array<ContentfulAuthorBlurbDescTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAuthorBlurbDescTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAuthorBlurbDescTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAuthorConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAuthorEdge>;
  nodes: Array<ContentfulAuthor>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAuthorGroupConnection>;
};


export type ContentfulAuthorConnectionDistinctArgs = {
  field: ContentfulAuthorFieldsEnum;
};


export type ContentfulAuthorConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAuthorFieldsEnum;
};

export type ContentfulAuthorEdge = {
  next?: Maybe<ContentfulAuthor>;
  node: ContentfulAuthor;
  previous?: Maybe<ContentfulAuthor>;
};

export type ContentfulAuthorFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'firstName'
  | 'lastName'
  | 'blurbTitle'
  | 'blurbLead'
  | 'profilePicture___id'
  | 'profilePicture___parent___id'
  | 'profilePicture___parent___parent___id'
  | 'profilePicture___parent___parent___children'
  | 'profilePicture___parent___children'
  | 'profilePicture___parent___children___id'
  | 'profilePicture___parent___children___children'
  | 'profilePicture___parent___internal___content'
  | 'profilePicture___parent___internal___contentDigest'
  | 'profilePicture___parent___internal___description'
  | 'profilePicture___parent___internal___fieldOwners'
  | 'profilePicture___parent___internal___ignoreType'
  | 'profilePicture___parent___internal___mediaType'
  | 'profilePicture___parent___internal___owner'
  | 'profilePicture___parent___internal___type'
  | 'profilePicture___children'
  | 'profilePicture___children___id'
  | 'profilePicture___children___parent___id'
  | 'profilePicture___children___parent___children'
  | 'profilePicture___children___children'
  | 'profilePicture___children___children___id'
  | 'profilePicture___children___children___children'
  | 'profilePicture___children___internal___content'
  | 'profilePicture___children___internal___contentDigest'
  | 'profilePicture___children___internal___description'
  | 'profilePicture___children___internal___fieldOwners'
  | 'profilePicture___children___internal___ignoreType'
  | 'profilePicture___children___internal___mediaType'
  | 'profilePicture___children___internal___owner'
  | 'profilePicture___children___internal___type'
  | 'profilePicture___internal___content'
  | 'profilePicture___internal___contentDigest'
  | 'profilePicture___internal___description'
  | 'profilePicture___internal___fieldOwners'
  | 'profilePicture___internal___ignoreType'
  | 'profilePicture___internal___mediaType'
  | 'profilePicture___internal___owner'
  | 'profilePicture___internal___type'
  | 'profilePicture___contentful_id'
  | 'profilePicture___file___url'
  | 'profilePicture___file___details___size'
  | 'profilePicture___file___fileName'
  | 'profilePicture___file___contentType'
  | 'profilePicture___title'
  | 'profilePicture___description'
  | 'profilePicture___node_locale'
  | 'profilePicture___fixed___base64'
  | 'profilePicture___fixed___tracedSVG'
  | 'profilePicture___fixed___aspectRatio'
  | 'profilePicture___fixed___width'
  | 'profilePicture___fixed___height'
  | 'profilePicture___fixed___src'
  | 'profilePicture___fixed___srcSet'
  | 'profilePicture___fixed___srcWebp'
  | 'profilePicture___fixed___srcSetWebp'
  | 'profilePicture___resolutions___base64'
  | 'profilePicture___resolutions___tracedSVG'
  | 'profilePicture___resolutions___aspectRatio'
  | 'profilePicture___resolutions___width'
  | 'profilePicture___resolutions___height'
  | 'profilePicture___resolutions___src'
  | 'profilePicture___resolutions___srcSet'
  | 'profilePicture___resolutions___srcWebp'
  | 'profilePicture___resolutions___srcSetWebp'
  | 'profilePicture___fluid___base64'
  | 'profilePicture___fluid___tracedSVG'
  | 'profilePicture___fluid___aspectRatio'
  | 'profilePicture___fluid___src'
  | 'profilePicture___fluid___srcSet'
  | 'profilePicture___fluid___srcWebp'
  | 'profilePicture___fluid___srcSetWebp'
  | 'profilePicture___fluid___sizes'
  | 'profilePicture___sizes___base64'
  | 'profilePicture___sizes___tracedSVG'
  | 'profilePicture___sizes___aspectRatio'
  | 'profilePicture___sizes___src'
  | 'profilePicture___sizes___srcSet'
  | 'profilePicture___sizes___srcWebp'
  | 'profilePicture___sizes___srcSetWebp'
  | 'profilePicture___sizes___sizes'
  | 'profilePicture___resize___base64'
  | 'profilePicture___resize___tracedSVG'
  | 'profilePicture___resize___src'
  | 'profilePicture___resize___width'
  | 'profilePicture___resize___height'
  | 'profilePicture___resize___aspectRatio'
  | 'socialLinks___id'
  | 'socialLinks___parent___id'
  | 'socialLinks___parent___parent___id'
  | 'socialLinks___parent___parent___children'
  | 'socialLinks___parent___children'
  | 'socialLinks___parent___children___id'
  | 'socialLinks___parent___children___children'
  | 'socialLinks___parent___internal___content'
  | 'socialLinks___parent___internal___contentDigest'
  | 'socialLinks___parent___internal___description'
  | 'socialLinks___parent___internal___fieldOwners'
  | 'socialLinks___parent___internal___ignoreType'
  | 'socialLinks___parent___internal___mediaType'
  | 'socialLinks___parent___internal___owner'
  | 'socialLinks___parent___internal___type'
  | 'socialLinks___children'
  | 'socialLinks___children___id'
  | 'socialLinks___children___parent___id'
  | 'socialLinks___children___parent___children'
  | 'socialLinks___children___children'
  | 'socialLinks___children___children___id'
  | 'socialLinks___children___children___children'
  | 'socialLinks___children___internal___content'
  | 'socialLinks___children___internal___contentDigest'
  | 'socialLinks___children___internal___description'
  | 'socialLinks___children___internal___fieldOwners'
  | 'socialLinks___children___internal___ignoreType'
  | 'socialLinks___children___internal___mediaType'
  | 'socialLinks___children___internal___owner'
  | 'socialLinks___children___internal___type'
  | 'socialLinks___internal___content'
  | 'socialLinks___internal___contentDigest'
  | 'socialLinks___internal___description'
  | 'socialLinks___internal___fieldOwners'
  | 'socialLinks___internal___ignoreType'
  | 'socialLinks___internal___mediaType'
  | 'socialLinks___internal___owner'
  | 'socialLinks___internal___type'
  | 'socialLinks___nickname'
  | 'socialLinks___email'
  | 'socialLinks___linkedin'
  | 'socialLinks___instagram'
  | 'socialLinks___twitter'
  | 'socialLinks___github'
  | 'socialLinks___devTo'
  | 'socialLinks___author'
  | 'socialLinks___author___id'
  | 'socialLinks___author___parent___id'
  | 'socialLinks___author___parent___children'
  | 'socialLinks___author___children'
  | 'socialLinks___author___children___id'
  | 'socialLinks___author___children___children'
  | 'socialLinks___author___internal___content'
  | 'socialLinks___author___internal___contentDigest'
  | 'socialLinks___author___internal___description'
  | 'socialLinks___author___internal___fieldOwners'
  | 'socialLinks___author___internal___ignoreType'
  | 'socialLinks___author___internal___mediaType'
  | 'socialLinks___author___internal___owner'
  | 'socialLinks___author___internal___type'
  | 'socialLinks___author___firstName'
  | 'socialLinks___author___lastName'
  | 'socialLinks___author___blurbTitle'
  | 'socialLinks___author___blurbLead'
  | 'socialLinks___author___profilePicture___id'
  | 'socialLinks___author___profilePicture___children'
  | 'socialLinks___author___profilePicture___contentful_id'
  | 'socialLinks___author___profilePicture___title'
  | 'socialLinks___author___profilePicture___description'
  | 'socialLinks___author___profilePicture___node_locale'
  | 'socialLinks___author___socialLinks___id'
  | 'socialLinks___author___socialLinks___children'
  | 'socialLinks___author___socialLinks___nickname'
  | 'socialLinks___author___socialLinks___email'
  | 'socialLinks___author___socialLinks___linkedin'
  | 'socialLinks___author___socialLinks___instagram'
  | 'socialLinks___author___socialLinks___twitter'
  | 'socialLinks___author___socialLinks___github'
  | 'socialLinks___author___socialLinks___devTo'
  | 'socialLinks___author___socialLinks___author'
  | 'socialLinks___author___socialLinks___spaceId'
  | 'socialLinks___author___socialLinks___contentful_id'
  | 'socialLinks___author___socialLinks___createdAt'
  | 'socialLinks___author___socialLinks___updatedAt'
  | 'socialLinks___author___socialLinks___node_locale'
  | 'socialLinks___author___page___home'
  | 'socialLinks___author___page___home___id'
  | 'socialLinks___author___page___home___children'
  | 'socialLinks___author___page___home___title'
  | 'socialLinks___author___page___home___subTitle'
  | 'socialLinks___author___page___home___page'
  | 'socialLinks___author___page___home___spaceId'
  | 'socialLinks___author___page___home___contentful_id'
  | 'socialLinks___author___page___home___createdAt'
  | 'socialLinks___author___page___home___updatedAt'
  | 'socialLinks___author___page___home___node_locale'
  | 'socialLinks___author___page___say_hello'
  | 'socialLinks___author___page___say_hello___id'
  | 'socialLinks___author___page___say_hello___children'
  | 'socialLinks___author___page___say_hello___title'
  | 'socialLinks___author___page___say_hello___page'
  | 'socialLinks___author___page___say_hello___spaceId'
  | 'socialLinks___author___page___say_hello___contentful_id'
  | 'socialLinks___author___page___say_hello___createdAt'
  | 'socialLinks___author___page___say_hello___updatedAt'
  | 'socialLinks___author___page___say_hello___node_locale'
  | 'socialLinks___author___blurbDesc___id'
  | 'socialLinks___author___blurbDesc___children'
  | 'socialLinks___author___blurbDesc___blurbDesc'
  | 'socialLinks___author___spaceId'
  | 'socialLinks___author___contentful_id'
  | 'socialLinks___author___createdAt'
  | 'socialLinks___author___updatedAt'
  | 'socialLinks___author___sys___revision'
  | 'socialLinks___author___node_locale'
  | 'socialLinks___author___childContentfulAuthorBlurbDescTextNode___id'
  | 'socialLinks___author___childContentfulAuthorBlurbDescTextNode___children'
  | 'socialLinks___author___childContentfulAuthorBlurbDescTextNode___blurbDesc'
  | 'socialLinks___spaceId'
  | 'socialLinks___contentful_id'
  | 'socialLinks___createdAt'
  | 'socialLinks___updatedAt'
  | 'socialLinks___sys___revision'
  | 'socialLinks___node_locale'
  | 'page___home'
  | 'page___home___id'
  | 'page___home___parent___id'
  | 'page___home___parent___parent___id'
  | 'page___home___parent___parent___children'
  | 'page___home___parent___children'
  | 'page___home___parent___children___id'
  | 'page___home___parent___children___children'
  | 'page___home___parent___internal___content'
  | 'page___home___parent___internal___contentDigest'
  | 'page___home___parent___internal___description'
  | 'page___home___parent___internal___fieldOwners'
  | 'page___home___parent___internal___ignoreType'
  | 'page___home___parent___internal___mediaType'
  | 'page___home___parent___internal___owner'
  | 'page___home___parent___internal___type'
  | 'page___home___children'
  | 'page___home___children___id'
  | 'page___home___children___parent___id'
  | 'page___home___children___parent___children'
  | 'page___home___children___children'
  | 'page___home___children___children___id'
  | 'page___home___children___children___children'
  | 'page___home___children___internal___content'
  | 'page___home___children___internal___contentDigest'
  | 'page___home___children___internal___description'
  | 'page___home___children___internal___fieldOwners'
  | 'page___home___children___internal___ignoreType'
  | 'page___home___children___internal___mediaType'
  | 'page___home___children___internal___owner'
  | 'page___home___children___internal___type'
  | 'page___home___internal___content'
  | 'page___home___internal___contentDigest'
  | 'page___home___internal___description'
  | 'page___home___internal___fieldOwners'
  | 'page___home___internal___ignoreType'
  | 'page___home___internal___mediaType'
  | 'page___home___internal___owner'
  | 'page___home___internal___type'
  | 'page___home___title'
  | 'page___home___subTitle'
  | 'page___home___authorBio___id'
  | 'page___home___authorBio___parent___id'
  | 'page___home___authorBio___parent___children'
  | 'page___home___authorBio___children'
  | 'page___home___authorBio___children___id'
  | 'page___home___authorBio___children___children'
  | 'page___home___authorBio___internal___content'
  | 'page___home___authorBio___internal___contentDigest'
  | 'page___home___authorBio___internal___description'
  | 'page___home___authorBio___internal___fieldOwners'
  | 'page___home___authorBio___internal___ignoreType'
  | 'page___home___authorBio___internal___mediaType'
  | 'page___home___authorBio___internal___owner'
  | 'page___home___authorBio___internal___type'
  | 'page___home___authorBio___firstName'
  | 'page___home___authorBio___lastName'
  | 'page___home___authorBio___blurbTitle'
  | 'page___home___authorBio___blurbLead'
  | 'page___home___authorBio___profilePicture___id'
  | 'page___home___authorBio___profilePicture___children'
  | 'page___home___authorBio___profilePicture___contentful_id'
  | 'page___home___authorBio___profilePicture___title'
  | 'page___home___authorBio___profilePicture___description'
  | 'page___home___authorBio___profilePicture___node_locale'
  | 'page___home___authorBio___socialLinks___id'
  | 'page___home___authorBio___socialLinks___children'
  | 'page___home___authorBio___socialLinks___nickname'
  | 'page___home___authorBio___socialLinks___email'
  | 'page___home___authorBio___socialLinks___linkedin'
  | 'page___home___authorBio___socialLinks___instagram'
  | 'page___home___authorBio___socialLinks___twitter'
  | 'page___home___authorBio___socialLinks___github'
  | 'page___home___authorBio___socialLinks___devTo'
  | 'page___home___authorBio___socialLinks___author'
  | 'page___home___authorBio___socialLinks___spaceId'
  | 'page___home___authorBio___socialLinks___contentful_id'
  | 'page___home___authorBio___socialLinks___createdAt'
  | 'page___home___authorBio___socialLinks___updatedAt'
  | 'page___home___authorBio___socialLinks___node_locale'
  | 'page___home___authorBio___page___home'
  | 'page___home___authorBio___page___home___id'
  | 'page___home___authorBio___page___home___children'
  | 'page___home___authorBio___page___home___title'
  | 'page___home___authorBio___page___home___subTitle'
  | 'page___home___authorBio___page___home___page'
  | 'page___home___authorBio___page___home___spaceId'
  | 'page___home___authorBio___page___home___contentful_id'
  | 'page___home___authorBio___page___home___createdAt'
  | 'page___home___authorBio___page___home___updatedAt'
  | 'page___home___authorBio___page___home___node_locale'
  | 'page___home___authorBio___page___say_hello'
  | 'page___home___authorBio___page___say_hello___id'
  | 'page___home___authorBio___page___say_hello___children'
  | 'page___home___authorBio___page___say_hello___title'
  | 'page___home___authorBio___page___say_hello___page'
  | 'page___home___authorBio___page___say_hello___spaceId'
  | 'page___home___authorBio___page___say_hello___contentful_id'
  | 'page___home___authorBio___page___say_hello___createdAt'
  | 'page___home___authorBio___page___say_hello___updatedAt'
  | 'page___home___authorBio___page___say_hello___node_locale'
  | 'page___home___authorBio___blurbDesc___id'
  | 'page___home___authorBio___blurbDesc___children'
  | 'page___home___authorBio___blurbDesc___blurbDesc'
  | 'page___home___authorBio___spaceId'
  | 'page___home___authorBio___contentful_id'
  | 'page___home___authorBio___createdAt'
  | 'page___home___authorBio___updatedAt'
  | 'page___home___authorBio___sys___revision'
  | 'page___home___authorBio___node_locale'
  | 'page___home___authorBio___childContentfulAuthorBlurbDescTextNode___id'
  | 'page___home___authorBio___childContentfulAuthorBlurbDescTextNode___children'
  | 'page___home___authorBio___childContentfulAuthorBlurbDescTextNode___blurbDesc'
  | 'page___home___page'
  | 'page___home___page___id'
  | 'page___home___page___parent___id'
  | 'page___home___page___parent___children'
  | 'page___home___page___children'
  | 'page___home___page___children___id'
  | 'page___home___page___children___children'
  | 'page___home___page___internal___content'
  | 'page___home___page___internal___contentDigest'
  | 'page___home___page___internal___description'
  | 'page___home___page___internal___fieldOwners'
  | 'page___home___page___internal___ignoreType'
  | 'page___home___page___internal___mediaType'
  | 'page___home___page___internal___owner'
  | 'page___home___page___internal___type'
  | 'page___home___page___title'
  | 'page___home___page___isTopLevel'
  | 'page___home___page___index'
  | 'page___home___page___spaceId'
  | 'page___home___page___contentful_id'
  | 'page___home___page___createdAt'
  | 'page___home___page___updatedAt'
  | 'page___home___page___sys___revision'
  | 'page___home___page___node_locale'
  | 'page___home___spaceId'
  | 'page___home___contentful_id'
  | 'page___home___createdAt'
  | 'page___home___updatedAt'
  | 'page___home___sys___revision'
  | 'page___home___node_locale'
  | 'page___say_hello'
  | 'page___say_hello___id'
  | 'page___say_hello___parent___id'
  | 'page___say_hello___parent___parent___id'
  | 'page___say_hello___parent___parent___children'
  | 'page___say_hello___parent___children'
  | 'page___say_hello___parent___children___id'
  | 'page___say_hello___parent___children___children'
  | 'page___say_hello___parent___internal___content'
  | 'page___say_hello___parent___internal___contentDigest'
  | 'page___say_hello___parent___internal___description'
  | 'page___say_hello___parent___internal___fieldOwners'
  | 'page___say_hello___parent___internal___ignoreType'
  | 'page___say_hello___parent___internal___mediaType'
  | 'page___say_hello___parent___internal___owner'
  | 'page___say_hello___parent___internal___type'
  | 'page___say_hello___children'
  | 'page___say_hello___children___id'
  | 'page___say_hello___children___parent___id'
  | 'page___say_hello___children___parent___children'
  | 'page___say_hello___children___children'
  | 'page___say_hello___children___children___id'
  | 'page___say_hello___children___children___children'
  | 'page___say_hello___children___internal___content'
  | 'page___say_hello___children___internal___contentDigest'
  | 'page___say_hello___children___internal___description'
  | 'page___say_hello___children___internal___fieldOwners'
  | 'page___say_hello___children___internal___ignoreType'
  | 'page___say_hello___children___internal___mediaType'
  | 'page___say_hello___children___internal___owner'
  | 'page___say_hello___children___internal___type'
  | 'page___say_hello___internal___content'
  | 'page___say_hello___internal___contentDigest'
  | 'page___say_hello___internal___description'
  | 'page___say_hello___internal___fieldOwners'
  | 'page___say_hello___internal___ignoreType'
  | 'page___say_hello___internal___mediaType'
  | 'page___say_hello___internal___owner'
  | 'page___say_hello___internal___type'
  | 'page___say_hello___title'
  | 'page___say_hello___contactPerson___id'
  | 'page___say_hello___contactPerson___parent___id'
  | 'page___say_hello___contactPerson___parent___children'
  | 'page___say_hello___contactPerson___children'
  | 'page___say_hello___contactPerson___children___id'
  | 'page___say_hello___contactPerson___children___children'
  | 'page___say_hello___contactPerson___internal___content'
  | 'page___say_hello___contactPerson___internal___contentDigest'
  | 'page___say_hello___contactPerson___internal___description'
  | 'page___say_hello___contactPerson___internal___fieldOwners'
  | 'page___say_hello___contactPerson___internal___ignoreType'
  | 'page___say_hello___contactPerson___internal___mediaType'
  | 'page___say_hello___contactPerson___internal___owner'
  | 'page___say_hello___contactPerson___internal___type'
  | 'page___say_hello___contactPerson___firstName'
  | 'page___say_hello___contactPerson___lastName'
  | 'page___say_hello___contactPerson___blurbTitle'
  | 'page___say_hello___contactPerson___blurbLead'
  | 'page___say_hello___contactPerson___profilePicture___id'
  | 'page___say_hello___contactPerson___profilePicture___children'
  | 'page___say_hello___contactPerson___profilePicture___contentful_id'
  | 'page___say_hello___contactPerson___profilePicture___title'
  | 'page___say_hello___contactPerson___profilePicture___description'
  | 'page___say_hello___contactPerson___profilePicture___node_locale'
  | 'page___say_hello___contactPerson___socialLinks___id'
  | 'page___say_hello___contactPerson___socialLinks___children'
  | 'page___say_hello___contactPerson___socialLinks___nickname'
  | 'page___say_hello___contactPerson___socialLinks___email'
  | 'page___say_hello___contactPerson___socialLinks___linkedin'
  | 'page___say_hello___contactPerson___socialLinks___instagram'
  | 'page___say_hello___contactPerson___socialLinks___twitter'
  | 'page___say_hello___contactPerson___socialLinks___github'
  | 'page___say_hello___contactPerson___socialLinks___devTo'
  | 'page___say_hello___contactPerson___socialLinks___author'
  | 'page___say_hello___contactPerson___socialLinks___spaceId'
  | 'page___say_hello___contactPerson___socialLinks___contentful_id'
  | 'page___say_hello___contactPerson___socialLinks___createdAt'
  | 'page___say_hello___contactPerson___socialLinks___updatedAt'
  | 'page___say_hello___contactPerson___socialLinks___node_locale'
  | 'page___say_hello___contactPerson___page___home'
  | 'page___say_hello___contactPerson___page___home___id'
  | 'page___say_hello___contactPerson___page___home___children'
  | 'page___say_hello___contactPerson___page___home___title'
  | 'page___say_hello___contactPerson___page___home___subTitle'
  | 'page___say_hello___contactPerson___page___home___page'
  | 'page___say_hello___contactPerson___page___home___spaceId'
  | 'page___say_hello___contactPerson___page___home___contentful_id'
  | 'page___say_hello___contactPerson___page___home___createdAt'
  | 'page___say_hello___contactPerson___page___home___updatedAt'
  | 'page___say_hello___contactPerson___page___home___node_locale'
  | 'page___say_hello___contactPerson___page___say_hello'
  | 'page___say_hello___contactPerson___page___say_hello___id'
  | 'page___say_hello___contactPerson___page___say_hello___children'
  | 'page___say_hello___contactPerson___page___say_hello___title'
  | 'page___say_hello___contactPerson___page___say_hello___page'
  | 'page___say_hello___contactPerson___page___say_hello___spaceId'
  | 'page___say_hello___contactPerson___page___say_hello___contentful_id'
  | 'page___say_hello___contactPerson___page___say_hello___createdAt'
  | 'page___say_hello___contactPerson___page___say_hello___updatedAt'
  | 'page___say_hello___contactPerson___page___say_hello___node_locale'
  | 'page___say_hello___contactPerson___blurbDesc___id'
  | 'page___say_hello___contactPerson___blurbDesc___children'
  | 'page___say_hello___contactPerson___blurbDesc___blurbDesc'
  | 'page___say_hello___contactPerson___spaceId'
  | 'page___say_hello___contactPerson___contentful_id'
  | 'page___say_hello___contactPerson___createdAt'
  | 'page___say_hello___contactPerson___updatedAt'
  | 'page___say_hello___contactPerson___sys___revision'
  | 'page___say_hello___contactPerson___node_locale'
  | 'page___say_hello___contactPerson___childContentfulAuthorBlurbDescTextNode___id'
  | 'page___say_hello___contactPerson___childContentfulAuthorBlurbDescTextNode___children'
  | 'page___say_hello___contactPerson___childContentfulAuthorBlurbDescTextNode___blurbDesc'
  | 'page___say_hello___page'
  | 'page___say_hello___page___id'
  | 'page___say_hello___page___parent___id'
  | 'page___say_hello___page___parent___children'
  | 'page___say_hello___page___children'
  | 'page___say_hello___page___children___id'
  | 'page___say_hello___page___children___children'
  | 'page___say_hello___page___internal___content'
  | 'page___say_hello___page___internal___contentDigest'
  | 'page___say_hello___page___internal___description'
  | 'page___say_hello___page___internal___fieldOwners'
  | 'page___say_hello___page___internal___ignoreType'
  | 'page___say_hello___page___internal___mediaType'
  | 'page___say_hello___page___internal___owner'
  | 'page___say_hello___page___internal___type'
  | 'page___say_hello___page___title'
  | 'page___say_hello___page___isTopLevel'
  | 'page___say_hello___page___index'
  | 'page___say_hello___page___spaceId'
  | 'page___say_hello___page___contentful_id'
  | 'page___say_hello___page___createdAt'
  | 'page___say_hello___page___updatedAt'
  | 'page___say_hello___page___sys___revision'
  | 'page___say_hello___page___node_locale'
  | 'page___say_hello___body___id'
  | 'page___say_hello___body___parent___id'
  | 'page___say_hello___body___parent___children'
  | 'page___say_hello___body___children'
  | 'page___say_hello___body___children___id'
  | 'page___say_hello___body___children___children'
  | 'page___say_hello___body___internal___content'
  | 'page___say_hello___body___internal___contentDigest'
  | 'page___say_hello___body___internal___description'
  | 'page___say_hello___body___internal___fieldOwners'
  | 'page___say_hello___body___internal___ignoreType'
  | 'page___say_hello___body___internal___mediaType'
  | 'page___say_hello___body___internal___owner'
  | 'page___say_hello___body___internal___type'
  | 'page___say_hello___body___body'
  | 'page___say_hello___body___childMarkdownRemark___id'
  | 'page___say_hello___body___childMarkdownRemark___excerpt'
  | 'page___say_hello___body___childMarkdownRemark___rawMarkdownBody'
  | 'page___say_hello___body___childMarkdownRemark___html'
  | 'page___say_hello___body___childMarkdownRemark___htmlAst'
  | 'page___say_hello___body___childMarkdownRemark___excerptAst'
  | 'page___say_hello___body___childMarkdownRemark___headings'
  | 'page___say_hello___body___childMarkdownRemark___timeToRead'
  | 'page___say_hello___body___childMarkdownRemark___tableOfContents'
  | 'page___say_hello___body___childMarkdownRemark___children'
  | 'page___say_hello___spaceId'
  | 'page___say_hello___contentful_id'
  | 'page___say_hello___createdAt'
  | 'page___say_hello___updatedAt'
  | 'page___say_hello___sys___revision'
  | 'page___say_hello___node_locale'
  | 'page___say_hello___childContentfulPageSayHelloBodyTextNode___id'
  | 'page___say_hello___childContentfulPageSayHelloBodyTextNode___parent___id'
  | 'page___say_hello___childContentfulPageSayHelloBodyTextNode___parent___children'
  | 'page___say_hello___childContentfulPageSayHelloBodyTextNode___children'
  | 'page___say_hello___childContentfulPageSayHelloBodyTextNode___children___id'
  | 'page___say_hello___childContentfulPageSayHelloBodyTextNode___children___children'
  | 'page___say_hello___childContentfulPageSayHelloBodyTextNode___internal___content'
  | 'page___say_hello___childContentfulPageSayHelloBodyTextNode___internal___contentDigest'
  | 'page___say_hello___childContentfulPageSayHelloBodyTextNode___internal___description'
  | 'page___say_hello___childContentfulPageSayHelloBodyTextNode___internal___fieldOwners'
  | 'page___say_hello___childContentfulPageSayHelloBodyTextNode___internal___ignoreType'
  | 'page___say_hello___childContentfulPageSayHelloBodyTextNode___internal___mediaType'
  | 'page___say_hello___childContentfulPageSayHelloBodyTextNode___internal___owner'
  | 'page___say_hello___childContentfulPageSayHelloBodyTextNode___internal___type'
  | 'page___say_hello___childContentfulPageSayHelloBodyTextNode___body'
  | 'page___say_hello___childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___id'
  | 'page___say_hello___childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___excerpt'
  | 'page___say_hello___childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'page___say_hello___childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___html'
  | 'page___say_hello___childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___htmlAst'
  | 'page___say_hello___childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___excerptAst'
  | 'page___say_hello___childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___headings'
  | 'page___say_hello___childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___timeToRead'
  | 'page___say_hello___childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___tableOfContents'
  | 'page___say_hello___childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___children'
  | 'blurbDesc___id'
  | 'blurbDesc___parent___id'
  | 'blurbDesc___parent___parent___id'
  | 'blurbDesc___parent___parent___children'
  | 'blurbDesc___parent___children'
  | 'blurbDesc___parent___children___id'
  | 'blurbDesc___parent___children___children'
  | 'blurbDesc___parent___internal___content'
  | 'blurbDesc___parent___internal___contentDigest'
  | 'blurbDesc___parent___internal___description'
  | 'blurbDesc___parent___internal___fieldOwners'
  | 'blurbDesc___parent___internal___ignoreType'
  | 'blurbDesc___parent___internal___mediaType'
  | 'blurbDesc___parent___internal___owner'
  | 'blurbDesc___parent___internal___type'
  | 'blurbDesc___children'
  | 'blurbDesc___children___id'
  | 'blurbDesc___children___parent___id'
  | 'blurbDesc___children___parent___children'
  | 'blurbDesc___children___children'
  | 'blurbDesc___children___children___id'
  | 'blurbDesc___children___children___children'
  | 'blurbDesc___children___internal___content'
  | 'blurbDesc___children___internal___contentDigest'
  | 'blurbDesc___children___internal___description'
  | 'blurbDesc___children___internal___fieldOwners'
  | 'blurbDesc___children___internal___ignoreType'
  | 'blurbDesc___children___internal___mediaType'
  | 'blurbDesc___children___internal___owner'
  | 'blurbDesc___children___internal___type'
  | 'blurbDesc___internal___content'
  | 'blurbDesc___internal___contentDigest'
  | 'blurbDesc___internal___description'
  | 'blurbDesc___internal___fieldOwners'
  | 'blurbDesc___internal___ignoreType'
  | 'blurbDesc___internal___mediaType'
  | 'blurbDesc___internal___owner'
  | 'blurbDesc___internal___type'
  | 'blurbDesc___blurbDesc'
  | 'blurbDesc___childMarkdownRemark___id'
  | 'blurbDesc___childMarkdownRemark___frontmatter___title'
  | 'blurbDesc___childMarkdownRemark___excerpt'
  | 'blurbDesc___childMarkdownRemark___rawMarkdownBody'
  | 'blurbDesc___childMarkdownRemark___html'
  | 'blurbDesc___childMarkdownRemark___htmlAst'
  | 'blurbDesc___childMarkdownRemark___excerptAst'
  | 'blurbDesc___childMarkdownRemark___headings'
  | 'blurbDesc___childMarkdownRemark___headings___id'
  | 'blurbDesc___childMarkdownRemark___headings___value'
  | 'blurbDesc___childMarkdownRemark___headings___depth'
  | 'blurbDesc___childMarkdownRemark___timeToRead'
  | 'blurbDesc___childMarkdownRemark___tableOfContents'
  | 'blurbDesc___childMarkdownRemark___wordCount___paragraphs'
  | 'blurbDesc___childMarkdownRemark___wordCount___sentences'
  | 'blurbDesc___childMarkdownRemark___wordCount___words'
  | 'blurbDesc___childMarkdownRemark___parent___id'
  | 'blurbDesc___childMarkdownRemark___parent___children'
  | 'blurbDesc___childMarkdownRemark___children'
  | 'blurbDesc___childMarkdownRemark___children___id'
  | 'blurbDesc___childMarkdownRemark___children___children'
  | 'blurbDesc___childMarkdownRemark___internal___content'
  | 'blurbDesc___childMarkdownRemark___internal___contentDigest'
  | 'blurbDesc___childMarkdownRemark___internal___description'
  | 'blurbDesc___childMarkdownRemark___internal___fieldOwners'
  | 'blurbDesc___childMarkdownRemark___internal___ignoreType'
  | 'blurbDesc___childMarkdownRemark___internal___mediaType'
  | 'blurbDesc___childMarkdownRemark___internal___owner'
  | 'blurbDesc___childMarkdownRemark___internal___type'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'childContentfulAuthorBlurbDescTextNode___id'
  | 'childContentfulAuthorBlurbDescTextNode___parent___id'
  | 'childContentfulAuthorBlurbDescTextNode___parent___parent___id'
  | 'childContentfulAuthorBlurbDescTextNode___parent___parent___children'
  | 'childContentfulAuthorBlurbDescTextNode___parent___children'
  | 'childContentfulAuthorBlurbDescTextNode___parent___children___id'
  | 'childContentfulAuthorBlurbDescTextNode___parent___children___children'
  | 'childContentfulAuthorBlurbDescTextNode___parent___internal___content'
  | 'childContentfulAuthorBlurbDescTextNode___parent___internal___contentDigest'
  | 'childContentfulAuthorBlurbDescTextNode___parent___internal___description'
  | 'childContentfulAuthorBlurbDescTextNode___parent___internal___fieldOwners'
  | 'childContentfulAuthorBlurbDescTextNode___parent___internal___ignoreType'
  | 'childContentfulAuthorBlurbDescTextNode___parent___internal___mediaType'
  | 'childContentfulAuthorBlurbDescTextNode___parent___internal___owner'
  | 'childContentfulAuthorBlurbDescTextNode___parent___internal___type'
  | 'childContentfulAuthorBlurbDescTextNode___children'
  | 'childContentfulAuthorBlurbDescTextNode___children___id'
  | 'childContentfulAuthorBlurbDescTextNode___children___parent___id'
  | 'childContentfulAuthorBlurbDescTextNode___children___parent___children'
  | 'childContentfulAuthorBlurbDescTextNode___children___children'
  | 'childContentfulAuthorBlurbDescTextNode___children___children___id'
  | 'childContentfulAuthorBlurbDescTextNode___children___children___children'
  | 'childContentfulAuthorBlurbDescTextNode___children___internal___content'
  | 'childContentfulAuthorBlurbDescTextNode___children___internal___contentDigest'
  | 'childContentfulAuthorBlurbDescTextNode___children___internal___description'
  | 'childContentfulAuthorBlurbDescTextNode___children___internal___fieldOwners'
  | 'childContentfulAuthorBlurbDescTextNode___children___internal___ignoreType'
  | 'childContentfulAuthorBlurbDescTextNode___children___internal___mediaType'
  | 'childContentfulAuthorBlurbDescTextNode___children___internal___owner'
  | 'childContentfulAuthorBlurbDescTextNode___children___internal___type'
  | 'childContentfulAuthorBlurbDescTextNode___internal___content'
  | 'childContentfulAuthorBlurbDescTextNode___internal___contentDigest'
  | 'childContentfulAuthorBlurbDescTextNode___internal___description'
  | 'childContentfulAuthorBlurbDescTextNode___internal___fieldOwners'
  | 'childContentfulAuthorBlurbDescTextNode___internal___ignoreType'
  | 'childContentfulAuthorBlurbDescTextNode___internal___mediaType'
  | 'childContentfulAuthorBlurbDescTextNode___internal___owner'
  | 'childContentfulAuthorBlurbDescTextNode___internal___type'
  | 'childContentfulAuthorBlurbDescTextNode___blurbDesc'
  | 'childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___id'
  | 'childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___frontmatter___title'
  | 'childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___excerpt'
  | 'childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___html'
  | 'childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___htmlAst'
  | 'childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___excerptAst'
  | 'childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___headings'
  | 'childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___headings___id'
  | 'childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___headings___value'
  | 'childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___headings___depth'
  | 'childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___timeToRead'
  | 'childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___tableOfContents'
  | 'childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___wordCount___paragraphs'
  | 'childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___wordCount___sentences'
  | 'childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___wordCount___words'
  | 'childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___parent___id'
  | 'childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___parent___children'
  | 'childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___children'
  | 'childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___children___id'
  | 'childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___children___children'
  | 'childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___internal___content'
  | 'childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___internal___contentDigest'
  | 'childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___internal___description'
  | 'childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___internal___fieldOwners'
  | 'childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___internal___ignoreType'
  | 'childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___internal___mediaType'
  | 'childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___internal___owner'
  | 'childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___internal___type';

export type ContentfulAuthorFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  firstName?: Maybe<StringQueryOperatorInput>;
  lastName?: Maybe<StringQueryOperatorInput>;
  blurbTitle?: Maybe<StringQueryOperatorInput>;
  blurbLead?: Maybe<StringQueryOperatorInput>;
  profilePicture?: Maybe<ContentfulAssetFilterInput>;
  socialLinks?: Maybe<ContentfulAuthorSocialLinksFilterInput>;
  page___home?: Maybe<ContentfulPageHomeFilterListInput>;
  page___say_hello?: Maybe<ContentfulPageSayHelloFilterListInput>;
  blurbDesc?: Maybe<ContentfulAuthorBlurbDescTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAuthorSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulAuthorBlurbDescTextNode?: Maybe<ContentfulAuthorBlurbDescTextNodeFilterInput>;
};

export type ContentfulAuthorFilterListInput = {
  elemMatch?: Maybe<ContentfulAuthorFilterInput>;
};

export type ContentfulAuthorGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAuthorEdge>;
  nodes: Array<ContentfulAuthor>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAuthorSocialLinks = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  nickname?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  devTo?: Maybe<Scalars['String']>;
  author?: Maybe<Array<Maybe<ContentfulAuthor>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulAuthorSocialLinksSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulAuthorSocialLinksCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAuthorSocialLinksUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulAuthorSocialLinksConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAuthorSocialLinksEdge>;
  nodes: Array<ContentfulAuthorSocialLinks>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAuthorSocialLinksGroupConnection>;
};


export type ContentfulAuthorSocialLinksConnectionDistinctArgs = {
  field: ContentfulAuthorSocialLinksFieldsEnum;
};


export type ContentfulAuthorSocialLinksConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAuthorSocialLinksFieldsEnum;
};

export type ContentfulAuthorSocialLinksEdge = {
  next?: Maybe<ContentfulAuthorSocialLinks>;
  node: ContentfulAuthorSocialLinks;
  previous?: Maybe<ContentfulAuthorSocialLinks>;
};

export type ContentfulAuthorSocialLinksFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'nickname'
  | 'email'
  | 'linkedin'
  | 'instagram'
  | 'twitter'
  | 'github'
  | 'devTo'
  | 'author'
  | 'author___id'
  | 'author___parent___id'
  | 'author___parent___parent___id'
  | 'author___parent___parent___children'
  | 'author___parent___children'
  | 'author___parent___children___id'
  | 'author___parent___children___children'
  | 'author___parent___internal___content'
  | 'author___parent___internal___contentDigest'
  | 'author___parent___internal___description'
  | 'author___parent___internal___fieldOwners'
  | 'author___parent___internal___ignoreType'
  | 'author___parent___internal___mediaType'
  | 'author___parent___internal___owner'
  | 'author___parent___internal___type'
  | 'author___children'
  | 'author___children___id'
  | 'author___children___parent___id'
  | 'author___children___parent___children'
  | 'author___children___children'
  | 'author___children___children___id'
  | 'author___children___children___children'
  | 'author___children___internal___content'
  | 'author___children___internal___contentDigest'
  | 'author___children___internal___description'
  | 'author___children___internal___fieldOwners'
  | 'author___children___internal___ignoreType'
  | 'author___children___internal___mediaType'
  | 'author___children___internal___owner'
  | 'author___children___internal___type'
  | 'author___internal___content'
  | 'author___internal___contentDigest'
  | 'author___internal___description'
  | 'author___internal___fieldOwners'
  | 'author___internal___ignoreType'
  | 'author___internal___mediaType'
  | 'author___internal___owner'
  | 'author___internal___type'
  | 'author___firstName'
  | 'author___lastName'
  | 'author___blurbTitle'
  | 'author___blurbLead'
  | 'author___profilePicture___id'
  | 'author___profilePicture___parent___id'
  | 'author___profilePicture___parent___children'
  | 'author___profilePicture___children'
  | 'author___profilePicture___children___id'
  | 'author___profilePicture___children___children'
  | 'author___profilePicture___internal___content'
  | 'author___profilePicture___internal___contentDigest'
  | 'author___profilePicture___internal___description'
  | 'author___profilePicture___internal___fieldOwners'
  | 'author___profilePicture___internal___ignoreType'
  | 'author___profilePicture___internal___mediaType'
  | 'author___profilePicture___internal___owner'
  | 'author___profilePicture___internal___type'
  | 'author___profilePicture___contentful_id'
  | 'author___profilePicture___file___url'
  | 'author___profilePicture___file___fileName'
  | 'author___profilePicture___file___contentType'
  | 'author___profilePicture___title'
  | 'author___profilePicture___description'
  | 'author___profilePicture___node_locale'
  | 'author___profilePicture___fixed___base64'
  | 'author___profilePicture___fixed___tracedSVG'
  | 'author___profilePicture___fixed___aspectRatio'
  | 'author___profilePicture___fixed___width'
  | 'author___profilePicture___fixed___height'
  | 'author___profilePicture___fixed___src'
  | 'author___profilePicture___fixed___srcSet'
  | 'author___profilePicture___fixed___srcWebp'
  | 'author___profilePicture___fixed___srcSetWebp'
  | 'author___profilePicture___resolutions___base64'
  | 'author___profilePicture___resolutions___tracedSVG'
  | 'author___profilePicture___resolutions___aspectRatio'
  | 'author___profilePicture___resolutions___width'
  | 'author___profilePicture___resolutions___height'
  | 'author___profilePicture___resolutions___src'
  | 'author___profilePicture___resolutions___srcSet'
  | 'author___profilePicture___resolutions___srcWebp'
  | 'author___profilePicture___resolutions___srcSetWebp'
  | 'author___profilePicture___fluid___base64'
  | 'author___profilePicture___fluid___tracedSVG'
  | 'author___profilePicture___fluid___aspectRatio'
  | 'author___profilePicture___fluid___src'
  | 'author___profilePicture___fluid___srcSet'
  | 'author___profilePicture___fluid___srcWebp'
  | 'author___profilePicture___fluid___srcSetWebp'
  | 'author___profilePicture___fluid___sizes'
  | 'author___profilePicture___sizes___base64'
  | 'author___profilePicture___sizes___tracedSVG'
  | 'author___profilePicture___sizes___aspectRatio'
  | 'author___profilePicture___sizes___src'
  | 'author___profilePicture___sizes___srcSet'
  | 'author___profilePicture___sizes___srcWebp'
  | 'author___profilePicture___sizes___srcSetWebp'
  | 'author___profilePicture___sizes___sizes'
  | 'author___profilePicture___resize___base64'
  | 'author___profilePicture___resize___tracedSVG'
  | 'author___profilePicture___resize___src'
  | 'author___profilePicture___resize___width'
  | 'author___profilePicture___resize___height'
  | 'author___profilePicture___resize___aspectRatio'
  | 'author___socialLinks___id'
  | 'author___socialLinks___parent___id'
  | 'author___socialLinks___parent___children'
  | 'author___socialLinks___children'
  | 'author___socialLinks___children___id'
  | 'author___socialLinks___children___children'
  | 'author___socialLinks___internal___content'
  | 'author___socialLinks___internal___contentDigest'
  | 'author___socialLinks___internal___description'
  | 'author___socialLinks___internal___fieldOwners'
  | 'author___socialLinks___internal___ignoreType'
  | 'author___socialLinks___internal___mediaType'
  | 'author___socialLinks___internal___owner'
  | 'author___socialLinks___internal___type'
  | 'author___socialLinks___nickname'
  | 'author___socialLinks___email'
  | 'author___socialLinks___linkedin'
  | 'author___socialLinks___instagram'
  | 'author___socialLinks___twitter'
  | 'author___socialLinks___github'
  | 'author___socialLinks___devTo'
  | 'author___socialLinks___author'
  | 'author___socialLinks___author___id'
  | 'author___socialLinks___author___children'
  | 'author___socialLinks___author___firstName'
  | 'author___socialLinks___author___lastName'
  | 'author___socialLinks___author___blurbTitle'
  | 'author___socialLinks___author___blurbLead'
  | 'author___socialLinks___author___page___home'
  | 'author___socialLinks___author___page___say_hello'
  | 'author___socialLinks___author___spaceId'
  | 'author___socialLinks___author___contentful_id'
  | 'author___socialLinks___author___createdAt'
  | 'author___socialLinks___author___updatedAt'
  | 'author___socialLinks___author___node_locale'
  | 'author___socialLinks___spaceId'
  | 'author___socialLinks___contentful_id'
  | 'author___socialLinks___createdAt'
  | 'author___socialLinks___updatedAt'
  | 'author___socialLinks___sys___revision'
  | 'author___socialLinks___node_locale'
  | 'author___page___home'
  | 'author___page___home___id'
  | 'author___page___home___parent___id'
  | 'author___page___home___parent___children'
  | 'author___page___home___children'
  | 'author___page___home___children___id'
  | 'author___page___home___children___children'
  | 'author___page___home___internal___content'
  | 'author___page___home___internal___contentDigest'
  | 'author___page___home___internal___description'
  | 'author___page___home___internal___fieldOwners'
  | 'author___page___home___internal___ignoreType'
  | 'author___page___home___internal___mediaType'
  | 'author___page___home___internal___owner'
  | 'author___page___home___internal___type'
  | 'author___page___home___title'
  | 'author___page___home___subTitle'
  | 'author___page___home___authorBio___id'
  | 'author___page___home___authorBio___children'
  | 'author___page___home___authorBio___firstName'
  | 'author___page___home___authorBio___lastName'
  | 'author___page___home___authorBio___blurbTitle'
  | 'author___page___home___authorBio___blurbLead'
  | 'author___page___home___authorBio___page___home'
  | 'author___page___home___authorBio___page___say_hello'
  | 'author___page___home___authorBio___spaceId'
  | 'author___page___home___authorBio___contentful_id'
  | 'author___page___home___authorBio___createdAt'
  | 'author___page___home___authorBio___updatedAt'
  | 'author___page___home___authorBio___node_locale'
  | 'author___page___home___page'
  | 'author___page___home___page___id'
  | 'author___page___home___page___children'
  | 'author___page___home___page___title'
  | 'author___page___home___page___isTopLevel'
  | 'author___page___home___page___index'
  | 'author___page___home___page___spaceId'
  | 'author___page___home___page___contentful_id'
  | 'author___page___home___page___createdAt'
  | 'author___page___home___page___updatedAt'
  | 'author___page___home___page___node_locale'
  | 'author___page___home___spaceId'
  | 'author___page___home___contentful_id'
  | 'author___page___home___createdAt'
  | 'author___page___home___updatedAt'
  | 'author___page___home___sys___revision'
  | 'author___page___home___node_locale'
  | 'author___page___say_hello'
  | 'author___page___say_hello___id'
  | 'author___page___say_hello___parent___id'
  | 'author___page___say_hello___parent___children'
  | 'author___page___say_hello___children'
  | 'author___page___say_hello___children___id'
  | 'author___page___say_hello___children___children'
  | 'author___page___say_hello___internal___content'
  | 'author___page___say_hello___internal___contentDigest'
  | 'author___page___say_hello___internal___description'
  | 'author___page___say_hello___internal___fieldOwners'
  | 'author___page___say_hello___internal___ignoreType'
  | 'author___page___say_hello___internal___mediaType'
  | 'author___page___say_hello___internal___owner'
  | 'author___page___say_hello___internal___type'
  | 'author___page___say_hello___title'
  | 'author___page___say_hello___contactPerson___id'
  | 'author___page___say_hello___contactPerson___children'
  | 'author___page___say_hello___contactPerson___firstName'
  | 'author___page___say_hello___contactPerson___lastName'
  | 'author___page___say_hello___contactPerson___blurbTitle'
  | 'author___page___say_hello___contactPerson___blurbLead'
  | 'author___page___say_hello___contactPerson___page___home'
  | 'author___page___say_hello___contactPerson___page___say_hello'
  | 'author___page___say_hello___contactPerson___spaceId'
  | 'author___page___say_hello___contactPerson___contentful_id'
  | 'author___page___say_hello___contactPerson___createdAt'
  | 'author___page___say_hello___contactPerson___updatedAt'
  | 'author___page___say_hello___contactPerson___node_locale'
  | 'author___page___say_hello___page'
  | 'author___page___say_hello___page___id'
  | 'author___page___say_hello___page___children'
  | 'author___page___say_hello___page___title'
  | 'author___page___say_hello___page___isTopLevel'
  | 'author___page___say_hello___page___index'
  | 'author___page___say_hello___page___spaceId'
  | 'author___page___say_hello___page___contentful_id'
  | 'author___page___say_hello___page___createdAt'
  | 'author___page___say_hello___page___updatedAt'
  | 'author___page___say_hello___page___node_locale'
  | 'author___page___say_hello___body___id'
  | 'author___page___say_hello___body___children'
  | 'author___page___say_hello___body___body'
  | 'author___page___say_hello___spaceId'
  | 'author___page___say_hello___contentful_id'
  | 'author___page___say_hello___createdAt'
  | 'author___page___say_hello___updatedAt'
  | 'author___page___say_hello___sys___revision'
  | 'author___page___say_hello___node_locale'
  | 'author___page___say_hello___childContentfulPageSayHelloBodyTextNode___id'
  | 'author___page___say_hello___childContentfulPageSayHelloBodyTextNode___children'
  | 'author___page___say_hello___childContentfulPageSayHelloBodyTextNode___body'
  | 'author___blurbDesc___id'
  | 'author___blurbDesc___parent___id'
  | 'author___blurbDesc___parent___children'
  | 'author___blurbDesc___children'
  | 'author___blurbDesc___children___id'
  | 'author___blurbDesc___children___children'
  | 'author___blurbDesc___internal___content'
  | 'author___blurbDesc___internal___contentDigest'
  | 'author___blurbDesc___internal___description'
  | 'author___blurbDesc___internal___fieldOwners'
  | 'author___blurbDesc___internal___ignoreType'
  | 'author___blurbDesc___internal___mediaType'
  | 'author___blurbDesc___internal___owner'
  | 'author___blurbDesc___internal___type'
  | 'author___blurbDesc___blurbDesc'
  | 'author___blurbDesc___childMarkdownRemark___id'
  | 'author___blurbDesc___childMarkdownRemark___excerpt'
  | 'author___blurbDesc___childMarkdownRemark___rawMarkdownBody'
  | 'author___blurbDesc___childMarkdownRemark___html'
  | 'author___blurbDesc___childMarkdownRemark___htmlAst'
  | 'author___blurbDesc___childMarkdownRemark___excerptAst'
  | 'author___blurbDesc___childMarkdownRemark___headings'
  | 'author___blurbDesc___childMarkdownRemark___timeToRead'
  | 'author___blurbDesc___childMarkdownRemark___tableOfContents'
  | 'author___blurbDesc___childMarkdownRemark___children'
  | 'author___spaceId'
  | 'author___contentful_id'
  | 'author___createdAt'
  | 'author___updatedAt'
  | 'author___sys___revision'
  | 'author___node_locale'
  | 'author___childContentfulAuthorBlurbDescTextNode___id'
  | 'author___childContentfulAuthorBlurbDescTextNode___parent___id'
  | 'author___childContentfulAuthorBlurbDescTextNode___parent___children'
  | 'author___childContentfulAuthorBlurbDescTextNode___children'
  | 'author___childContentfulAuthorBlurbDescTextNode___children___id'
  | 'author___childContentfulAuthorBlurbDescTextNode___children___children'
  | 'author___childContentfulAuthorBlurbDescTextNode___internal___content'
  | 'author___childContentfulAuthorBlurbDescTextNode___internal___contentDigest'
  | 'author___childContentfulAuthorBlurbDescTextNode___internal___description'
  | 'author___childContentfulAuthorBlurbDescTextNode___internal___fieldOwners'
  | 'author___childContentfulAuthorBlurbDescTextNode___internal___ignoreType'
  | 'author___childContentfulAuthorBlurbDescTextNode___internal___mediaType'
  | 'author___childContentfulAuthorBlurbDescTextNode___internal___owner'
  | 'author___childContentfulAuthorBlurbDescTextNode___internal___type'
  | 'author___childContentfulAuthorBlurbDescTextNode___blurbDesc'
  | 'author___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___id'
  | 'author___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___excerpt'
  | 'author___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'author___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___html'
  | 'author___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___htmlAst'
  | 'author___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___excerptAst'
  | 'author___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___headings'
  | 'author___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___timeToRead'
  | 'author___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___tableOfContents'
  | 'author___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___children'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale';

export type ContentfulAuthorSocialLinksFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  nickname?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  linkedin?: Maybe<StringQueryOperatorInput>;
  instagram?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  github?: Maybe<StringQueryOperatorInput>;
  devTo?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<ContentfulAuthorFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAuthorSocialLinksSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAuthorSocialLinksGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAuthorSocialLinksEdge>;
  nodes: Array<ContentfulAuthorSocialLinks>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAuthorSocialLinksSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAuthorSocialLinksFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAuthorSocialLinksSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulAuthorSocialLinksSysContentType>;
};

export type ContentfulAuthorSocialLinksSysContentType = {
  sys?: Maybe<ContentfulAuthorSocialLinksSysContentTypeSys>;
};

export type ContentfulAuthorSocialLinksSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulAuthorSocialLinksSysContentTypeSysFilterInput>;
};

export type ContentfulAuthorSocialLinksSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulAuthorSocialLinksSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAuthorSocialLinksSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulAuthorSocialLinksSysContentTypeFilterInput>;
};

export type ContentfulAuthorSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAuthorFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAuthorSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulAuthorSysContentType>;
};

export type ContentfulAuthorSysContentType = {
  sys?: Maybe<ContentfulAuthorSysContentTypeSys>;
};

export type ContentfulAuthorSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulAuthorSysContentTypeSysFilterInput>;
};

export type ContentfulAuthorSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulAuthorSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAuthorSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulAuthorSysContentTypeFilterInput>;
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export type ContentfulContentTypeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'displayField'
  | 'description';

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulImageCropFocus = 
  | 'TOP'
  | 'TOP_LEFT'
  | 'TOP_RIGHT'
  | 'BOTTOM'
  | 'BOTTOM_RIGHT'
  | 'BOTTOM_LEFT'
  | 'RIGHT'
  | 'LEFT'
  | 'FACE'
  | 'FACES'
  | 'CENTER';

export type ContentfulImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ContentfulMeta = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  slug?: Maybe<Scalars['String']>;
  entryDate?: Maybe<Scalars['Date']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  post___series?: Maybe<Array<Maybe<ContentfulPostSeries>>>;
  desc?: Maybe<ContentfulMetaDescTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulMetaSys>;
  node_locale?: Maybe<Scalars['String']>;
  post?: Maybe<Array<Maybe<ContentfulPost>>>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
  childContentfulMetaDescTextNode?: Maybe<ContentfulMetaDescTextNode>;
};


export type ContentfulMetaEntryDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulMetaCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulMetaUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulMetaConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMetaEdge>;
  nodes: Array<ContentfulMeta>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulMetaGroupConnection>;
};


export type ContentfulMetaConnectionDistinctArgs = {
  field: ContentfulMetaFieldsEnum;
};


export type ContentfulMetaConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulMetaFieldsEnum;
};

export type ContentfulMetaContentfulSiteMetadataUnion = ContentfulMeta | ContentfulSiteMetadata;

export type ContentfulMetaDescTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  desc?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulMetaDescTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMetaDescTextNodeEdge>;
  nodes: Array<ContentfulMetaDescTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulMetaDescTextNodeGroupConnection>;
};


export type ContentfulMetaDescTextNodeConnectionDistinctArgs = {
  field: ContentfulMetaDescTextNodeFieldsEnum;
};


export type ContentfulMetaDescTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulMetaDescTextNodeFieldsEnum;
};

export type ContentfulMetaDescTextNodeEdge = {
  next?: Maybe<ContentfulMetaDescTextNode>;
  node: ContentfulMetaDescTextNode;
  previous?: Maybe<ContentfulMetaDescTextNode>;
};

export type ContentfulMetaDescTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'desc'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___fields___readingTime___text'
  | 'childMarkdownRemark___fields___readingTime___minutes'
  | 'childMarkdownRemark___fields___readingTime___time'
  | 'childMarkdownRemark___fields___readingTime___words'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type ContentfulMetaDescTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  desc?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulMetaDescTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMetaDescTextNodeEdge>;
  nodes: Array<ContentfulMetaDescTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulMetaDescTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulMetaDescTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulMetaEdge = {
  next?: Maybe<ContentfulMeta>;
  node: ContentfulMeta;
  previous?: Maybe<ContentfulMeta>;
};

export type ContentfulMetaFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'slug'
  | 'entryDate'
  | 'tags'
  | 'post___series'
  | 'post___series___id'
  | 'post___series___parent___id'
  | 'post___series___parent___parent___id'
  | 'post___series___parent___parent___children'
  | 'post___series___parent___children'
  | 'post___series___parent___children___id'
  | 'post___series___parent___children___children'
  | 'post___series___parent___internal___content'
  | 'post___series___parent___internal___contentDigest'
  | 'post___series___parent___internal___description'
  | 'post___series___parent___internal___fieldOwners'
  | 'post___series___parent___internal___ignoreType'
  | 'post___series___parent___internal___mediaType'
  | 'post___series___parent___internal___owner'
  | 'post___series___parent___internal___type'
  | 'post___series___children'
  | 'post___series___children___id'
  | 'post___series___children___parent___id'
  | 'post___series___children___parent___children'
  | 'post___series___children___children'
  | 'post___series___children___children___id'
  | 'post___series___children___children___children'
  | 'post___series___children___internal___content'
  | 'post___series___children___internal___contentDigest'
  | 'post___series___children___internal___description'
  | 'post___series___children___internal___fieldOwners'
  | 'post___series___children___internal___ignoreType'
  | 'post___series___children___internal___mediaType'
  | 'post___series___children___internal___owner'
  | 'post___series___children___internal___type'
  | 'post___series___internal___content'
  | 'post___series___internal___contentDigest'
  | 'post___series___internal___description'
  | 'post___series___internal___fieldOwners'
  | 'post___series___internal___ignoreType'
  | 'post___series___internal___mediaType'
  | 'post___series___internal___owner'
  | 'post___series___internal___type'
  | 'post___series___title'
  | 'post___series___meta___id'
  | 'post___series___meta___parent___id'
  | 'post___series___meta___parent___children'
  | 'post___series___meta___children'
  | 'post___series___meta___children___id'
  | 'post___series___meta___children___children'
  | 'post___series___meta___internal___content'
  | 'post___series___meta___internal___contentDigest'
  | 'post___series___meta___internal___description'
  | 'post___series___meta___internal___fieldOwners'
  | 'post___series___meta___internal___ignoreType'
  | 'post___series___meta___internal___mediaType'
  | 'post___series___meta___internal___owner'
  | 'post___series___meta___internal___type'
  | 'post___series___meta___slug'
  | 'post___series___meta___entryDate'
  | 'post___series___meta___tags'
  | 'post___series___meta___post___series'
  | 'post___series___meta___post___series___id'
  | 'post___series___meta___post___series___children'
  | 'post___series___meta___post___series___title'
  | 'post___series___meta___post___series___post'
  | 'post___series___meta___post___series___spaceId'
  | 'post___series___meta___post___series___contentful_id'
  | 'post___series___meta___post___series___createdAt'
  | 'post___series___meta___post___series___updatedAt'
  | 'post___series___meta___post___series___node_locale'
  | 'post___series___meta___desc___id'
  | 'post___series___meta___desc___children'
  | 'post___series___meta___desc___desc'
  | 'post___series___meta___spaceId'
  | 'post___series___meta___contentful_id'
  | 'post___series___meta___createdAt'
  | 'post___series___meta___updatedAt'
  | 'post___series___meta___sys___revision'
  | 'post___series___meta___node_locale'
  | 'post___series___meta___post'
  | 'post___series___meta___post___id'
  | 'post___series___meta___post___children'
  | 'post___series___meta___post___title'
  | 'post___series___meta___post___spaceId'
  | 'post___series___meta___post___contentful_id'
  | 'post___series___meta___post___createdAt'
  | 'post___series___meta___post___updatedAt'
  | 'post___series___meta___post___node_locale'
  | 'post___series___meta___page'
  | 'post___series___meta___page___id'
  | 'post___series___meta___page___children'
  | 'post___series___meta___page___title'
  | 'post___series___meta___page___isTopLevel'
  | 'post___series___meta___page___index'
  | 'post___series___meta___page___spaceId'
  | 'post___series___meta___page___contentful_id'
  | 'post___series___meta___page___createdAt'
  | 'post___series___meta___page___updatedAt'
  | 'post___series___meta___page___node_locale'
  | 'post___series___meta___childContentfulMetaDescTextNode___id'
  | 'post___series___meta___childContentfulMetaDescTextNode___children'
  | 'post___series___meta___childContentfulMetaDescTextNode___desc'
  | 'post___series___post'
  | 'post___series___post___id'
  | 'post___series___post___parent___id'
  | 'post___series___post___parent___children'
  | 'post___series___post___children'
  | 'post___series___post___children___id'
  | 'post___series___post___children___children'
  | 'post___series___post___internal___content'
  | 'post___series___post___internal___contentDigest'
  | 'post___series___post___internal___description'
  | 'post___series___post___internal___fieldOwners'
  | 'post___series___post___internal___ignoreType'
  | 'post___series___post___internal___mediaType'
  | 'post___series___post___internal___owner'
  | 'post___series___post___internal___type'
  | 'post___series___post___title'
  | 'post___series___post___meta___id'
  | 'post___series___post___meta___children'
  | 'post___series___post___meta___slug'
  | 'post___series___post___meta___entryDate'
  | 'post___series___post___meta___tags'
  | 'post___series___post___meta___post___series'
  | 'post___series___post___meta___spaceId'
  | 'post___series___post___meta___contentful_id'
  | 'post___series___post___meta___createdAt'
  | 'post___series___post___meta___updatedAt'
  | 'post___series___post___meta___node_locale'
  | 'post___series___post___meta___post'
  | 'post___series___post___meta___page'
  | 'post___series___post___series___id'
  | 'post___series___post___series___children'
  | 'post___series___post___series___title'
  | 'post___series___post___series___post'
  | 'post___series___post___series___spaceId'
  | 'post___series___post___series___contentful_id'
  | 'post___series___post___series___createdAt'
  | 'post___series___post___series___updatedAt'
  | 'post___series___post___series___node_locale'
  | 'post___series___post___body___id'
  | 'post___series___post___body___children'
  | 'post___series___post___body___body'
  | 'post___series___post___spaceId'
  | 'post___series___post___contentful_id'
  | 'post___series___post___createdAt'
  | 'post___series___post___updatedAt'
  | 'post___series___post___sys___revision'
  | 'post___series___post___node_locale'
  | 'post___series___post___childContentfulPostBodyTextNode___id'
  | 'post___series___post___childContentfulPostBodyTextNode___children'
  | 'post___series___post___childContentfulPostBodyTextNode___body'
  | 'post___series___spaceId'
  | 'post___series___contentful_id'
  | 'post___series___createdAt'
  | 'post___series___updatedAt'
  | 'post___series___sys___revision'
  | 'post___series___node_locale'
  | 'desc___id'
  | 'desc___parent___id'
  | 'desc___parent___parent___id'
  | 'desc___parent___parent___children'
  | 'desc___parent___children'
  | 'desc___parent___children___id'
  | 'desc___parent___children___children'
  | 'desc___parent___internal___content'
  | 'desc___parent___internal___contentDigest'
  | 'desc___parent___internal___description'
  | 'desc___parent___internal___fieldOwners'
  | 'desc___parent___internal___ignoreType'
  | 'desc___parent___internal___mediaType'
  | 'desc___parent___internal___owner'
  | 'desc___parent___internal___type'
  | 'desc___children'
  | 'desc___children___id'
  | 'desc___children___parent___id'
  | 'desc___children___parent___children'
  | 'desc___children___children'
  | 'desc___children___children___id'
  | 'desc___children___children___children'
  | 'desc___children___internal___content'
  | 'desc___children___internal___contentDigest'
  | 'desc___children___internal___description'
  | 'desc___children___internal___fieldOwners'
  | 'desc___children___internal___ignoreType'
  | 'desc___children___internal___mediaType'
  | 'desc___children___internal___owner'
  | 'desc___children___internal___type'
  | 'desc___internal___content'
  | 'desc___internal___contentDigest'
  | 'desc___internal___description'
  | 'desc___internal___fieldOwners'
  | 'desc___internal___ignoreType'
  | 'desc___internal___mediaType'
  | 'desc___internal___owner'
  | 'desc___internal___type'
  | 'desc___desc'
  | 'desc___childMarkdownRemark___id'
  | 'desc___childMarkdownRemark___frontmatter___title'
  | 'desc___childMarkdownRemark___excerpt'
  | 'desc___childMarkdownRemark___rawMarkdownBody'
  | 'desc___childMarkdownRemark___html'
  | 'desc___childMarkdownRemark___htmlAst'
  | 'desc___childMarkdownRemark___excerptAst'
  | 'desc___childMarkdownRemark___headings'
  | 'desc___childMarkdownRemark___headings___id'
  | 'desc___childMarkdownRemark___headings___value'
  | 'desc___childMarkdownRemark___headings___depth'
  | 'desc___childMarkdownRemark___timeToRead'
  | 'desc___childMarkdownRemark___tableOfContents'
  | 'desc___childMarkdownRemark___wordCount___paragraphs'
  | 'desc___childMarkdownRemark___wordCount___sentences'
  | 'desc___childMarkdownRemark___wordCount___words'
  | 'desc___childMarkdownRemark___parent___id'
  | 'desc___childMarkdownRemark___parent___children'
  | 'desc___childMarkdownRemark___children'
  | 'desc___childMarkdownRemark___children___id'
  | 'desc___childMarkdownRemark___children___children'
  | 'desc___childMarkdownRemark___internal___content'
  | 'desc___childMarkdownRemark___internal___contentDigest'
  | 'desc___childMarkdownRemark___internal___description'
  | 'desc___childMarkdownRemark___internal___fieldOwners'
  | 'desc___childMarkdownRemark___internal___ignoreType'
  | 'desc___childMarkdownRemark___internal___mediaType'
  | 'desc___childMarkdownRemark___internal___owner'
  | 'desc___childMarkdownRemark___internal___type'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'post'
  | 'post___id'
  | 'post___parent___id'
  | 'post___parent___parent___id'
  | 'post___parent___parent___children'
  | 'post___parent___children'
  | 'post___parent___children___id'
  | 'post___parent___children___children'
  | 'post___parent___internal___content'
  | 'post___parent___internal___contentDigest'
  | 'post___parent___internal___description'
  | 'post___parent___internal___fieldOwners'
  | 'post___parent___internal___ignoreType'
  | 'post___parent___internal___mediaType'
  | 'post___parent___internal___owner'
  | 'post___parent___internal___type'
  | 'post___children'
  | 'post___children___id'
  | 'post___children___parent___id'
  | 'post___children___parent___children'
  | 'post___children___children'
  | 'post___children___children___id'
  | 'post___children___children___children'
  | 'post___children___internal___content'
  | 'post___children___internal___contentDigest'
  | 'post___children___internal___description'
  | 'post___children___internal___fieldOwners'
  | 'post___children___internal___ignoreType'
  | 'post___children___internal___mediaType'
  | 'post___children___internal___owner'
  | 'post___children___internal___type'
  | 'post___internal___content'
  | 'post___internal___contentDigest'
  | 'post___internal___description'
  | 'post___internal___fieldOwners'
  | 'post___internal___ignoreType'
  | 'post___internal___mediaType'
  | 'post___internal___owner'
  | 'post___internal___type'
  | 'post___title'
  | 'post___meta___id'
  | 'post___meta___parent___id'
  | 'post___meta___parent___children'
  | 'post___meta___children'
  | 'post___meta___children___id'
  | 'post___meta___children___children'
  | 'post___meta___internal___content'
  | 'post___meta___internal___contentDigest'
  | 'post___meta___internal___description'
  | 'post___meta___internal___fieldOwners'
  | 'post___meta___internal___ignoreType'
  | 'post___meta___internal___mediaType'
  | 'post___meta___internal___owner'
  | 'post___meta___internal___type'
  | 'post___meta___slug'
  | 'post___meta___entryDate'
  | 'post___meta___tags'
  | 'post___meta___post___series'
  | 'post___meta___post___series___id'
  | 'post___meta___post___series___children'
  | 'post___meta___post___series___title'
  | 'post___meta___post___series___post'
  | 'post___meta___post___series___spaceId'
  | 'post___meta___post___series___contentful_id'
  | 'post___meta___post___series___createdAt'
  | 'post___meta___post___series___updatedAt'
  | 'post___meta___post___series___node_locale'
  | 'post___meta___desc___id'
  | 'post___meta___desc___children'
  | 'post___meta___desc___desc'
  | 'post___meta___spaceId'
  | 'post___meta___contentful_id'
  | 'post___meta___createdAt'
  | 'post___meta___updatedAt'
  | 'post___meta___sys___revision'
  | 'post___meta___node_locale'
  | 'post___meta___post'
  | 'post___meta___post___id'
  | 'post___meta___post___children'
  | 'post___meta___post___title'
  | 'post___meta___post___spaceId'
  | 'post___meta___post___contentful_id'
  | 'post___meta___post___createdAt'
  | 'post___meta___post___updatedAt'
  | 'post___meta___post___node_locale'
  | 'post___meta___page'
  | 'post___meta___page___id'
  | 'post___meta___page___children'
  | 'post___meta___page___title'
  | 'post___meta___page___isTopLevel'
  | 'post___meta___page___index'
  | 'post___meta___page___spaceId'
  | 'post___meta___page___contentful_id'
  | 'post___meta___page___createdAt'
  | 'post___meta___page___updatedAt'
  | 'post___meta___page___node_locale'
  | 'post___meta___childContentfulMetaDescTextNode___id'
  | 'post___meta___childContentfulMetaDescTextNode___children'
  | 'post___meta___childContentfulMetaDescTextNode___desc'
  | 'post___body___id'
  | 'post___body___parent___id'
  | 'post___body___parent___children'
  | 'post___body___children'
  | 'post___body___children___id'
  | 'post___body___children___children'
  | 'post___body___internal___content'
  | 'post___body___internal___contentDigest'
  | 'post___body___internal___description'
  | 'post___body___internal___fieldOwners'
  | 'post___body___internal___ignoreType'
  | 'post___body___internal___mediaType'
  | 'post___body___internal___owner'
  | 'post___body___internal___type'
  | 'post___body___body'
  | 'post___body___childMarkdownRemark___id'
  | 'post___body___childMarkdownRemark___excerpt'
  | 'post___body___childMarkdownRemark___rawMarkdownBody'
  | 'post___body___childMarkdownRemark___html'
  | 'post___body___childMarkdownRemark___htmlAst'
  | 'post___body___childMarkdownRemark___excerptAst'
  | 'post___body___childMarkdownRemark___headings'
  | 'post___body___childMarkdownRemark___timeToRead'
  | 'post___body___childMarkdownRemark___tableOfContents'
  | 'post___body___childMarkdownRemark___children'
  | 'post___spaceId'
  | 'post___contentful_id'
  | 'post___createdAt'
  | 'post___updatedAt'
  | 'post___sys___revision'
  | 'post___node_locale'
  | 'post___childContentfulPostBodyTextNode___id'
  | 'post___childContentfulPostBodyTextNode___parent___id'
  | 'post___childContentfulPostBodyTextNode___parent___children'
  | 'post___childContentfulPostBodyTextNode___children'
  | 'post___childContentfulPostBodyTextNode___children___id'
  | 'post___childContentfulPostBodyTextNode___children___children'
  | 'post___childContentfulPostBodyTextNode___internal___content'
  | 'post___childContentfulPostBodyTextNode___internal___contentDigest'
  | 'post___childContentfulPostBodyTextNode___internal___description'
  | 'post___childContentfulPostBodyTextNode___internal___fieldOwners'
  | 'post___childContentfulPostBodyTextNode___internal___ignoreType'
  | 'post___childContentfulPostBodyTextNode___internal___mediaType'
  | 'post___childContentfulPostBodyTextNode___internal___owner'
  | 'post___childContentfulPostBodyTextNode___internal___type'
  | 'post___childContentfulPostBodyTextNode___body'
  | 'post___childContentfulPostBodyTextNode___childMarkdownRemark___id'
  | 'post___childContentfulPostBodyTextNode___childMarkdownRemark___excerpt'
  | 'post___childContentfulPostBodyTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'post___childContentfulPostBodyTextNode___childMarkdownRemark___html'
  | 'post___childContentfulPostBodyTextNode___childMarkdownRemark___htmlAst'
  | 'post___childContentfulPostBodyTextNode___childMarkdownRemark___excerptAst'
  | 'post___childContentfulPostBodyTextNode___childMarkdownRemark___headings'
  | 'post___childContentfulPostBodyTextNode___childMarkdownRemark___timeToRead'
  | 'post___childContentfulPostBodyTextNode___childMarkdownRemark___tableOfContents'
  | 'post___childContentfulPostBodyTextNode___childMarkdownRemark___children'
  | 'page'
  | 'page___id'
  | 'page___parent___id'
  | 'page___parent___parent___id'
  | 'page___parent___parent___children'
  | 'page___parent___children'
  | 'page___parent___children___id'
  | 'page___parent___children___children'
  | 'page___parent___internal___content'
  | 'page___parent___internal___contentDigest'
  | 'page___parent___internal___description'
  | 'page___parent___internal___fieldOwners'
  | 'page___parent___internal___ignoreType'
  | 'page___parent___internal___mediaType'
  | 'page___parent___internal___owner'
  | 'page___parent___internal___type'
  | 'page___children'
  | 'page___children___id'
  | 'page___children___parent___id'
  | 'page___children___parent___children'
  | 'page___children___children'
  | 'page___children___children___id'
  | 'page___children___children___children'
  | 'page___children___internal___content'
  | 'page___children___internal___contentDigest'
  | 'page___children___internal___description'
  | 'page___children___internal___fieldOwners'
  | 'page___children___internal___ignoreType'
  | 'page___children___internal___mediaType'
  | 'page___children___internal___owner'
  | 'page___children___internal___type'
  | 'page___internal___content'
  | 'page___internal___contentDigest'
  | 'page___internal___description'
  | 'page___internal___fieldOwners'
  | 'page___internal___ignoreType'
  | 'page___internal___mediaType'
  | 'page___internal___owner'
  | 'page___internal___type'
  | 'page___title'
  | 'page___isTopLevel'
  | 'page___index'
  | 'page___spaceId'
  | 'page___contentful_id'
  | 'page___createdAt'
  | 'page___updatedAt'
  | 'page___sys___revision'
  | 'page___node_locale'
  | 'childContentfulMetaDescTextNode___id'
  | 'childContentfulMetaDescTextNode___parent___id'
  | 'childContentfulMetaDescTextNode___parent___parent___id'
  | 'childContentfulMetaDescTextNode___parent___parent___children'
  | 'childContentfulMetaDescTextNode___parent___children'
  | 'childContentfulMetaDescTextNode___parent___children___id'
  | 'childContentfulMetaDescTextNode___parent___children___children'
  | 'childContentfulMetaDescTextNode___parent___internal___content'
  | 'childContentfulMetaDescTextNode___parent___internal___contentDigest'
  | 'childContentfulMetaDescTextNode___parent___internal___description'
  | 'childContentfulMetaDescTextNode___parent___internal___fieldOwners'
  | 'childContentfulMetaDescTextNode___parent___internal___ignoreType'
  | 'childContentfulMetaDescTextNode___parent___internal___mediaType'
  | 'childContentfulMetaDescTextNode___parent___internal___owner'
  | 'childContentfulMetaDescTextNode___parent___internal___type'
  | 'childContentfulMetaDescTextNode___children'
  | 'childContentfulMetaDescTextNode___children___id'
  | 'childContentfulMetaDescTextNode___children___parent___id'
  | 'childContentfulMetaDescTextNode___children___parent___children'
  | 'childContentfulMetaDescTextNode___children___children'
  | 'childContentfulMetaDescTextNode___children___children___id'
  | 'childContentfulMetaDescTextNode___children___children___children'
  | 'childContentfulMetaDescTextNode___children___internal___content'
  | 'childContentfulMetaDescTextNode___children___internal___contentDigest'
  | 'childContentfulMetaDescTextNode___children___internal___description'
  | 'childContentfulMetaDescTextNode___children___internal___fieldOwners'
  | 'childContentfulMetaDescTextNode___children___internal___ignoreType'
  | 'childContentfulMetaDescTextNode___children___internal___mediaType'
  | 'childContentfulMetaDescTextNode___children___internal___owner'
  | 'childContentfulMetaDescTextNode___children___internal___type'
  | 'childContentfulMetaDescTextNode___internal___content'
  | 'childContentfulMetaDescTextNode___internal___contentDigest'
  | 'childContentfulMetaDescTextNode___internal___description'
  | 'childContentfulMetaDescTextNode___internal___fieldOwners'
  | 'childContentfulMetaDescTextNode___internal___ignoreType'
  | 'childContentfulMetaDescTextNode___internal___mediaType'
  | 'childContentfulMetaDescTextNode___internal___owner'
  | 'childContentfulMetaDescTextNode___internal___type'
  | 'childContentfulMetaDescTextNode___desc'
  | 'childContentfulMetaDescTextNode___childMarkdownRemark___id'
  | 'childContentfulMetaDescTextNode___childMarkdownRemark___frontmatter___title'
  | 'childContentfulMetaDescTextNode___childMarkdownRemark___excerpt'
  | 'childContentfulMetaDescTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'childContentfulMetaDescTextNode___childMarkdownRemark___html'
  | 'childContentfulMetaDescTextNode___childMarkdownRemark___htmlAst'
  | 'childContentfulMetaDescTextNode___childMarkdownRemark___excerptAst'
  | 'childContentfulMetaDescTextNode___childMarkdownRemark___headings'
  | 'childContentfulMetaDescTextNode___childMarkdownRemark___headings___id'
  | 'childContentfulMetaDescTextNode___childMarkdownRemark___headings___value'
  | 'childContentfulMetaDescTextNode___childMarkdownRemark___headings___depth'
  | 'childContentfulMetaDescTextNode___childMarkdownRemark___timeToRead'
  | 'childContentfulMetaDescTextNode___childMarkdownRemark___tableOfContents'
  | 'childContentfulMetaDescTextNode___childMarkdownRemark___wordCount___paragraphs'
  | 'childContentfulMetaDescTextNode___childMarkdownRemark___wordCount___sentences'
  | 'childContentfulMetaDescTextNode___childMarkdownRemark___wordCount___words'
  | 'childContentfulMetaDescTextNode___childMarkdownRemark___parent___id'
  | 'childContentfulMetaDescTextNode___childMarkdownRemark___parent___children'
  | 'childContentfulMetaDescTextNode___childMarkdownRemark___children'
  | 'childContentfulMetaDescTextNode___childMarkdownRemark___children___id'
  | 'childContentfulMetaDescTextNode___childMarkdownRemark___children___children'
  | 'childContentfulMetaDescTextNode___childMarkdownRemark___internal___content'
  | 'childContentfulMetaDescTextNode___childMarkdownRemark___internal___contentDigest'
  | 'childContentfulMetaDescTextNode___childMarkdownRemark___internal___description'
  | 'childContentfulMetaDescTextNode___childMarkdownRemark___internal___fieldOwners'
  | 'childContentfulMetaDescTextNode___childMarkdownRemark___internal___ignoreType'
  | 'childContentfulMetaDescTextNode___childMarkdownRemark___internal___mediaType'
  | 'childContentfulMetaDescTextNode___childMarkdownRemark___internal___owner'
  | 'childContentfulMetaDescTextNode___childMarkdownRemark___internal___type';

export type ContentfulMetaFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  entryDate?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  post___series?: Maybe<ContentfulPostSeriesFilterListInput>;
  desc?: Maybe<ContentfulMetaDescTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulMetaSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  post?: Maybe<ContentfulPostFilterListInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  childContentfulMetaDescTextNode?: Maybe<ContentfulMetaDescTextNodeFilterInput>;
};

export type ContentfulMetaGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMetaEdge>;
  nodes: Array<ContentfulMeta>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulMetaSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulMetaFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulMetaSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulMetaSysContentType>;
};

export type ContentfulMetaSysContentType = {
  sys?: Maybe<ContentfulMetaSysContentTypeSys>;
};

export type ContentfulMetaSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulMetaSysContentTypeSysFilterInput>;
};

export type ContentfulMetaSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulMetaSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulMetaSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulMetaSysContentTypeFilterInput>;
};

export type ContentfulPage = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  isTopLevel?: Maybe<Scalars['Boolean']>;
  index?: Maybe<Scalars['Int']>;
  meta?: Maybe<ContentfulMetaContentfulSiteMetadataUnion>;
  blocks?: Maybe<ContentfulPageAboutContentfulPageHomeContentfulPageSayHelloUnion>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulPageSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulPageCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPageUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulPageAbout = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
  body?: Maybe<ContentfulPageAboutBodyTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulPageAboutSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulPageAboutBodyTextNode?: Maybe<ContentfulPageAboutBodyTextNode>;
};


export type ContentfulPageAboutCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPageAboutUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulPageAboutBodyTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  body?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulPageAboutBodyTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageAboutBodyTextNodeEdge>;
  nodes: Array<ContentfulPageAboutBodyTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPageAboutBodyTextNodeGroupConnection>;
};


export type ContentfulPageAboutBodyTextNodeConnectionDistinctArgs = {
  field: ContentfulPageAboutBodyTextNodeFieldsEnum;
};


export type ContentfulPageAboutBodyTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPageAboutBodyTextNodeFieldsEnum;
};

export type ContentfulPageAboutBodyTextNodeEdge = {
  next?: Maybe<ContentfulPageAboutBodyTextNode>;
  node: ContentfulPageAboutBodyTextNode;
  previous?: Maybe<ContentfulPageAboutBodyTextNode>;
};

export type ContentfulPageAboutBodyTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'body'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___fields___readingTime___text'
  | 'childMarkdownRemark___fields___readingTime___minutes'
  | 'childMarkdownRemark___fields___readingTime___time'
  | 'childMarkdownRemark___fields___readingTime___words'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type ContentfulPageAboutBodyTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulPageAboutBodyTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageAboutBodyTextNodeEdge>;
  nodes: Array<ContentfulPageAboutBodyTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPageAboutBodyTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPageAboutBodyTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPageAboutConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageAboutEdge>;
  nodes: Array<ContentfulPageAbout>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPageAboutGroupConnection>;
};


export type ContentfulPageAboutConnectionDistinctArgs = {
  field: ContentfulPageAboutFieldsEnum;
};


export type ContentfulPageAboutConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPageAboutFieldsEnum;
};

export type ContentfulPageAboutContentfulPageHomeContentfulPageSayHelloUnion = ContentfulPageAbout | ContentfulPageHome | ContentfulPageSayHello;

export type ContentfulPageAboutEdge = {
  next?: Maybe<ContentfulPageAbout>;
  node: ContentfulPageAbout;
  previous?: Maybe<ContentfulPageAbout>;
};

export type ContentfulPageAboutFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'page'
  | 'page___id'
  | 'page___parent___id'
  | 'page___parent___parent___id'
  | 'page___parent___parent___children'
  | 'page___parent___children'
  | 'page___parent___children___id'
  | 'page___parent___children___children'
  | 'page___parent___internal___content'
  | 'page___parent___internal___contentDigest'
  | 'page___parent___internal___description'
  | 'page___parent___internal___fieldOwners'
  | 'page___parent___internal___ignoreType'
  | 'page___parent___internal___mediaType'
  | 'page___parent___internal___owner'
  | 'page___parent___internal___type'
  | 'page___children'
  | 'page___children___id'
  | 'page___children___parent___id'
  | 'page___children___parent___children'
  | 'page___children___children'
  | 'page___children___children___id'
  | 'page___children___children___children'
  | 'page___children___internal___content'
  | 'page___children___internal___contentDigest'
  | 'page___children___internal___description'
  | 'page___children___internal___fieldOwners'
  | 'page___children___internal___ignoreType'
  | 'page___children___internal___mediaType'
  | 'page___children___internal___owner'
  | 'page___children___internal___type'
  | 'page___internal___content'
  | 'page___internal___contentDigest'
  | 'page___internal___description'
  | 'page___internal___fieldOwners'
  | 'page___internal___ignoreType'
  | 'page___internal___mediaType'
  | 'page___internal___owner'
  | 'page___internal___type'
  | 'page___title'
  | 'page___isTopLevel'
  | 'page___index'
  | 'page___spaceId'
  | 'page___contentful_id'
  | 'page___createdAt'
  | 'page___updatedAt'
  | 'page___sys___revision'
  | 'page___node_locale'
  | 'body___id'
  | 'body___parent___id'
  | 'body___parent___parent___id'
  | 'body___parent___parent___children'
  | 'body___parent___children'
  | 'body___parent___children___id'
  | 'body___parent___children___children'
  | 'body___parent___internal___content'
  | 'body___parent___internal___contentDigest'
  | 'body___parent___internal___description'
  | 'body___parent___internal___fieldOwners'
  | 'body___parent___internal___ignoreType'
  | 'body___parent___internal___mediaType'
  | 'body___parent___internal___owner'
  | 'body___parent___internal___type'
  | 'body___children'
  | 'body___children___id'
  | 'body___children___parent___id'
  | 'body___children___parent___children'
  | 'body___children___children'
  | 'body___children___children___id'
  | 'body___children___children___children'
  | 'body___children___internal___content'
  | 'body___children___internal___contentDigest'
  | 'body___children___internal___description'
  | 'body___children___internal___fieldOwners'
  | 'body___children___internal___ignoreType'
  | 'body___children___internal___mediaType'
  | 'body___children___internal___owner'
  | 'body___children___internal___type'
  | 'body___internal___content'
  | 'body___internal___contentDigest'
  | 'body___internal___description'
  | 'body___internal___fieldOwners'
  | 'body___internal___ignoreType'
  | 'body___internal___mediaType'
  | 'body___internal___owner'
  | 'body___internal___type'
  | 'body___body'
  | 'body___childMarkdownRemark___id'
  | 'body___childMarkdownRemark___frontmatter___title'
  | 'body___childMarkdownRemark___excerpt'
  | 'body___childMarkdownRemark___rawMarkdownBody'
  | 'body___childMarkdownRemark___html'
  | 'body___childMarkdownRemark___htmlAst'
  | 'body___childMarkdownRemark___excerptAst'
  | 'body___childMarkdownRemark___headings'
  | 'body___childMarkdownRemark___headings___id'
  | 'body___childMarkdownRemark___headings___value'
  | 'body___childMarkdownRemark___headings___depth'
  | 'body___childMarkdownRemark___timeToRead'
  | 'body___childMarkdownRemark___tableOfContents'
  | 'body___childMarkdownRemark___wordCount___paragraphs'
  | 'body___childMarkdownRemark___wordCount___sentences'
  | 'body___childMarkdownRemark___wordCount___words'
  | 'body___childMarkdownRemark___parent___id'
  | 'body___childMarkdownRemark___parent___children'
  | 'body___childMarkdownRemark___children'
  | 'body___childMarkdownRemark___children___id'
  | 'body___childMarkdownRemark___children___children'
  | 'body___childMarkdownRemark___internal___content'
  | 'body___childMarkdownRemark___internal___contentDigest'
  | 'body___childMarkdownRemark___internal___description'
  | 'body___childMarkdownRemark___internal___fieldOwners'
  | 'body___childMarkdownRemark___internal___ignoreType'
  | 'body___childMarkdownRemark___internal___mediaType'
  | 'body___childMarkdownRemark___internal___owner'
  | 'body___childMarkdownRemark___internal___type'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'childContentfulPageAboutBodyTextNode___id'
  | 'childContentfulPageAboutBodyTextNode___parent___id'
  | 'childContentfulPageAboutBodyTextNode___parent___parent___id'
  | 'childContentfulPageAboutBodyTextNode___parent___parent___children'
  | 'childContentfulPageAboutBodyTextNode___parent___children'
  | 'childContentfulPageAboutBodyTextNode___parent___children___id'
  | 'childContentfulPageAboutBodyTextNode___parent___children___children'
  | 'childContentfulPageAboutBodyTextNode___parent___internal___content'
  | 'childContentfulPageAboutBodyTextNode___parent___internal___contentDigest'
  | 'childContentfulPageAboutBodyTextNode___parent___internal___description'
  | 'childContentfulPageAboutBodyTextNode___parent___internal___fieldOwners'
  | 'childContentfulPageAboutBodyTextNode___parent___internal___ignoreType'
  | 'childContentfulPageAboutBodyTextNode___parent___internal___mediaType'
  | 'childContentfulPageAboutBodyTextNode___parent___internal___owner'
  | 'childContentfulPageAboutBodyTextNode___parent___internal___type'
  | 'childContentfulPageAboutBodyTextNode___children'
  | 'childContentfulPageAboutBodyTextNode___children___id'
  | 'childContentfulPageAboutBodyTextNode___children___parent___id'
  | 'childContentfulPageAboutBodyTextNode___children___parent___children'
  | 'childContentfulPageAboutBodyTextNode___children___children'
  | 'childContentfulPageAboutBodyTextNode___children___children___id'
  | 'childContentfulPageAboutBodyTextNode___children___children___children'
  | 'childContentfulPageAboutBodyTextNode___children___internal___content'
  | 'childContentfulPageAboutBodyTextNode___children___internal___contentDigest'
  | 'childContentfulPageAboutBodyTextNode___children___internal___description'
  | 'childContentfulPageAboutBodyTextNode___children___internal___fieldOwners'
  | 'childContentfulPageAboutBodyTextNode___children___internal___ignoreType'
  | 'childContentfulPageAboutBodyTextNode___children___internal___mediaType'
  | 'childContentfulPageAboutBodyTextNode___children___internal___owner'
  | 'childContentfulPageAboutBodyTextNode___children___internal___type'
  | 'childContentfulPageAboutBodyTextNode___internal___content'
  | 'childContentfulPageAboutBodyTextNode___internal___contentDigest'
  | 'childContentfulPageAboutBodyTextNode___internal___description'
  | 'childContentfulPageAboutBodyTextNode___internal___fieldOwners'
  | 'childContentfulPageAboutBodyTextNode___internal___ignoreType'
  | 'childContentfulPageAboutBodyTextNode___internal___mediaType'
  | 'childContentfulPageAboutBodyTextNode___internal___owner'
  | 'childContentfulPageAboutBodyTextNode___internal___type'
  | 'childContentfulPageAboutBodyTextNode___body'
  | 'childContentfulPageAboutBodyTextNode___childMarkdownRemark___id'
  | 'childContentfulPageAboutBodyTextNode___childMarkdownRemark___frontmatter___title'
  | 'childContentfulPageAboutBodyTextNode___childMarkdownRemark___excerpt'
  | 'childContentfulPageAboutBodyTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'childContentfulPageAboutBodyTextNode___childMarkdownRemark___html'
  | 'childContentfulPageAboutBodyTextNode___childMarkdownRemark___htmlAst'
  | 'childContentfulPageAboutBodyTextNode___childMarkdownRemark___excerptAst'
  | 'childContentfulPageAboutBodyTextNode___childMarkdownRemark___headings'
  | 'childContentfulPageAboutBodyTextNode___childMarkdownRemark___headings___id'
  | 'childContentfulPageAboutBodyTextNode___childMarkdownRemark___headings___value'
  | 'childContentfulPageAboutBodyTextNode___childMarkdownRemark___headings___depth'
  | 'childContentfulPageAboutBodyTextNode___childMarkdownRemark___timeToRead'
  | 'childContentfulPageAboutBodyTextNode___childMarkdownRemark___tableOfContents'
  | 'childContentfulPageAboutBodyTextNode___childMarkdownRemark___wordCount___paragraphs'
  | 'childContentfulPageAboutBodyTextNode___childMarkdownRemark___wordCount___sentences'
  | 'childContentfulPageAboutBodyTextNode___childMarkdownRemark___wordCount___words'
  | 'childContentfulPageAboutBodyTextNode___childMarkdownRemark___parent___id'
  | 'childContentfulPageAboutBodyTextNode___childMarkdownRemark___parent___children'
  | 'childContentfulPageAboutBodyTextNode___childMarkdownRemark___children'
  | 'childContentfulPageAboutBodyTextNode___childMarkdownRemark___children___id'
  | 'childContentfulPageAboutBodyTextNode___childMarkdownRemark___children___children'
  | 'childContentfulPageAboutBodyTextNode___childMarkdownRemark___internal___content'
  | 'childContentfulPageAboutBodyTextNode___childMarkdownRemark___internal___contentDigest'
  | 'childContentfulPageAboutBodyTextNode___childMarkdownRemark___internal___description'
  | 'childContentfulPageAboutBodyTextNode___childMarkdownRemark___internal___fieldOwners'
  | 'childContentfulPageAboutBodyTextNode___childMarkdownRemark___internal___ignoreType'
  | 'childContentfulPageAboutBodyTextNode___childMarkdownRemark___internal___mediaType'
  | 'childContentfulPageAboutBodyTextNode___childMarkdownRemark___internal___owner'
  | 'childContentfulPageAboutBodyTextNode___childMarkdownRemark___internal___type';

export type ContentfulPageAboutFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  body?: Maybe<ContentfulPageAboutBodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPageAboutSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulPageAboutBodyTextNode?: Maybe<ContentfulPageAboutBodyTextNodeFilterInput>;
};

export type ContentfulPageAboutGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageAboutEdge>;
  nodes: Array<ContentfulPageAbout>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPageAboutSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPageAboutFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPageAboutSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulPageAboutSysContentType>;
};

export type ContentfulPageAboutSysContentType = {
  sys?: Maybe<ContentfulPageAboutSysContentTypeSys>;
};

export type ContentfulPageAboutSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPageAboutSysContentTypeSysFilterInput>;
};

export type ContentfulPageAboutSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulPageAboutSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPageAboutSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulPageAboutSysContentTypeFilterInput>;
};

export type ContentfulPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageEdge>;
  nodes: Array<ContentfulPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPageGroupConnection>;
};


export type ContentfulPageConnectionDistinctArgs = {
  field: ContentfulPageFieldsEnum;
};


export type ContentfulPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPageFieldsEnum;
};

export type ContentfulPageEdge = {
  next?: Maybe<ContentfulPage>;
  node: ContentfulPage;
  previous?: Maybe<ContentfulPage>;
};

export type ContentfulPageFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'isTopLevel'
  | 'index'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale';

export type ContentfulPageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  isTopLevel?: Maybe<BooleanQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPageSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPageFilterListInput = {
  elemMatch?: Maybe<ContentfulPageFilterInput>;
};

export type ContentfulPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageEdge>;
  nodes: Array<ContentfulPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPageHome = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  authorBio?: Maybe<ContentfulAuthor>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulPageHomeSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulPageHomeCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPageHomeUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulPageHomeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageHomeEdge>;
  nodes: Array<ContentfulPageHome>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPageHomeGroupConnection>;
};


export type ContentfulPageHomeConnectionDistinctArgs = {
  field: ContentfulPageHomeFieldsEnum;
};


export type ContentfulPageHomeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPageHomeFieldsEnum;
};

export type ContentfulPageHomeEdge = {
  next?: Maybe<ContentfulPageHome>;
  node: ContentfulPageHome;
  previous?: Maybe<ContentfulPageHome>;
};

export type ContentfulPageHomeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'subTitle'
  | 'authorBio___id'
  | 'authorBio___parent___id'
  | 'authorBio___parent___parent___id'
  | 'authorBio___parent___parent___children'
  | 'authorBio___parent___children'
  | 'authorBio___parent___children___id'
  | 'authorBio___parent___children___children'
  | 'authorBio___parent___internal___content'
  | 'authorBio___parent___internal___contentDigest'
  | 'authorBio___parent___internal___description'
  | 'authorBio___parent___internal___fieldOwners'
  | 'authorBio___parent___internal___ignoreType'
  | 'authorBio___parent___internal___mediaType'
  | 'authorBio___parent___internal___owner'
  | 'authorBio___parent___internal___type'
  | 'authorBio___children'
  | 'authorBio___children___id'
  | 'authorBio___children___parent___id'
  | 'authorBio___children___parent___children'
  | 'authorBio___children___children'
  | 'authorBio___children___children___id'
  | 'authorBio___children___children___children'
  | 'authorBio___children___internal___content'
  | 'authorBio___children___internal___contentDigest'
  | 'authorBio___children___internal___description'
  | 'authorBio___children___internal___fieldOwners'
  | 'authorBio___children___internal___ignoreType'
  | 'authorBio___children___internal___mediaType'
  | 'authorBio___children___internal___owner'
  | 'authorBio___children___internal___type'
  | 'authorBio___internal___content'
  | 'authorBio___internal___contentDigest'
  | 'authorBio___internal___description'
  | 'authorBio___internal___fieldOwners'
  | 'authorBio___internal___ignoreType'
  | 'authorBio___internal___mediaType'
  | 'authorBio___internal___owner'
  | 'authorBio___internal___type'
  | 'authorBio___firstName'
  | 'authorBio___lastName'
  | 'authorBio___blurbTitle'
  | 'authorBio___blurbLead'
  | 'authorBio___profilePicture___id'
  | 'authorBio___profilePicture___parent___id'
  | 'authorBio___profilePicture___parent___children'
  | 'authorBio___profilePicture___children'
  | 'authorBio___profilePicture___children___id'
  | 'authorBio___profilePicture___children___children'
  | 'authorBio___profilePicture___internal___content'
  | 'authorBio___profilePicture___internal___contentDigest'
  | 'authorBio___profilePicture___internal___description'
  | 'authorBio___profilePicture___internal___fieldOwners'
  | 'authorBio___profilePicture___internal___ignoreType'
  | 'authorBio___profilePicture___internal___mediaType'
  | 'authorBio___profilePicture___internal___owner'
  | 'authorBio___profilePicture___internal___type'
  | 'authorBio___profilePicture___contentful_id'
  | 'authorBio___profilePicture___file___url'
  | 'authorBio___profilePicture___file___fileName'
  | 'authorBio___profilePicture___file___contentType'
  | 'authorBio___profilePicture___title'
  | 'authorBio___profilePicture___description'
  | 'authorBio___profilePicture___node_locale'
  | 'authorBio___profilePicture___fixed___base64'
  | 'authorBio___profilePicture___fixed___tracedSVG'
  | 'authorBio___profilePicture___fixed___aspectRatio'
  | 'authorBio___profilePicture___fixed___width'
  | 'authorBio___profilePicture___fixed___height'
  | 'authorBio___profilePicture___fixed___src'
  | 'authorBio___profilePicture___fixed___srcSet'
  | 'authorBio___profilePicture___fixed___srcWebp'
  | 'authorBio___profilePicture___fixed___srcSetWebp'
  | 'authorBio___profilePicture___resolutions___base64'
  | 'authorBio___profilePicture___resolutions___tracedSVG'
  | 'authorBio___profilePicture___resolutions___aspectRatio'
  | 'authorBio___profilePicture___resolutions___width'
  | 'authorBio___profilePicture___resolutions___height'
  | 'authorBio___profilePicture___resolutions___src'
  | 'authorBio___profilePicture___resolutions___srcSet'
  | 'authorBio___profilePicture___resolutions___srcWebp'
  | 'authorBio___profilePicture___resolutions___srcSetWebp'
  | 'authorBio___profilePicture___fluid___base64'
  | 'authorBio___profilePicture___fluid___tracedSVG'
  | 'authorBio___profilePicture___fluid___aspectRatio'
  | 'authorBio___profilePicture___fluid___src'
  | 'authorBio___profilePicture___fluid___srcSet'
  | 'authorBio___profilePicture___fluid___srcWebp'
  | 'authorBio___profilePicture___fluid___srcSetWebp'
  | 'authorBio___profilePicture___fluid___sizes'
  | 'authorBio___profilePicture___sizes___base64'
  | 'authorBio___profilePicture___sizes___tracedSVG'
  | 'authorBio___profilePicture___sizes___aspectRatio'
  | 'authorBio___profilePicture___sizes___src'
  | 'authorBio___profilePicture___sizes___srcSet'
  | 'authorBio___profilePicture___sizes___srcWebp'
  | 'authorBio___profilePicture___sizes___srcSetWebp'
  | 'authorBio___profilePicture___sizes___sizes'
  | 'authorBio___profilePicture___resize___base64'
  | 'authorBio___profilePicture___resize___tracedSVG'
  | 'authorBio___profilePicture___resize___src'
  | 'authorBio___profilePicture___resize___width'
  | 'authorBio___profilePicture___resize___height'
  | 'authorBio___profilePicture___resize___aspectRatio'
  | 'authorBio___socialLinks___id'
  | 'authorBio___socialLinks___parent___id'
  | 'authorBio___socialLinks___parent___children'
  | 'authorBio___socialLinks___children'
  | 'authorBio___socialLinks___children___id'
  | 'authorBio___socialLinks___children___children'
  | 'authorBio___socialLinks___internal___content'
  | 'authorBio___socialLinks___internal___contentDigest'
  | 'authorBio___socialLinks___internal___description'
  | 'authorBio___socialLinks___internal___fieldOwners'
  | 'authorBio___socialLinks___internal___ignoreType'
  | 'authorBio___socialLinks___internal___mediaType'
  | 'authorBio___socialLinks___internal___owner'
  | 'authorBio___socialLinks___internal___type'
  | 'authorBio___socialLinks___nickname'
  | 'authorBio___socialLinks___email'
  | 'authorBio___socialLinks___linkedin'
  | 'authorBio___socialLinks___instagram'
  | 'authorBio___socialLinks___twitter'
  | 'authorBio___socialLinks___github'
  | 'authorBio___socialLinks___devTo'
  | 'authorBio___socialLinks___author'
  | 'authorBio___socialLinks___author___id'
  | 'authorBio___socialLinks___author___children'
  | 'authorBio___socialLinks___author___firstName'
  | 'authorBio___socialLinks___author___lastName'
  | 'authorBio___socialLinks___author___blurbTitle'
  | 'authorBio___socialLinks___author___blurbLead'
  | 'authorBio___socialLinks___author___page___home'
  | 'authorBio___socialLinks___author___page___say_hello'
  | 'authorBio___socialLinks___author___spaceId'
  | 'authorBio___socialLinks___author___contentful_id'
  | 'authorBio___socialLinks___author___createdAt'
  | 'authorBio___socialLinks___author___updatedAt'
  | 'authorBio___socialLinks___author___node_locale'
  | 'authorBio___socialLinks___spaceId'
  | 'authorBio___socialLinks___contentful_id'
  | 'authorBio___socialLinks___createdAt'
  | 'authorBio___socialLinks___updatedAt'
  | 'authorBio___socialLinks___sys___revision'
  | 'authorBio___socialLinks___node_locale'
  | 'authorBio___page___home'
  | 'authorBio___page___home___id'
  | 'authorBio___page___home___parent___id'
  | 'authorBio___page___home___parent___children'
  | 'authorBio___page___home___children'
  | 'authorBio___page___home___children___id'
  | 'authorBio___page___home___children___children'
  | 'authorBio___page___home___internal___content'
  | 'authorBio___page___home___internal___contentDigest'
  | 'authorBio___page___home___internal___description'
  | 'authorBio___page___home___internal___fieldOwners'
  | 'authorBio___page___home___internal___ignoreType'
  | 'authorBio___page___home___internal___mediaType'
  | 'authorBio___page___home___internal___owner'
  | 'authorBio___page___home___internal___type'
  | 'authorBio___page___home___title'
  | 'authorBio___page___home___subTitle'
  | 'authorBio___page___home___authorBio___id'
  | 'authorBio___page___home___authorBio___children'
  | 'authorBio___page___home___authorBio___firstName'
  | 'authorBio___page___home___authorBio___lastName'
  | 'authorBio___page___home___authorBio___blurbTitle'
  | 'authorBio___page___home___authorBio___blurbLead'
  | 'authorBio___page___home___authorBio___page___home'
  | 'authorBio___page___home___authorBio___page___say_hello'
  | 'authorBio___page___home___authorBio___spaceId'
  | 'authorBio___page___home___authorBio___contentful_id'
  | 'authorBio___page___home___authorBio___createdAt'
  | 'authorBio___page___home___authorBio___updatedAt'
  | 'authorBio___page___home___authorBio___node_locale'
  | 'authorBio___page___home___page'
  | 'authorBio___page___home___page___id'
  | 'authorBio___page___home___page___children'
  | 'authorBio___page___home___page___title'
  | 'authorBio___page___home___page___isTopLevel'
  | 'authorBio___page___home___page___index'
  | 'authorBio___page___home___page___spaceId'
  | 'authorBio___page___home___page___contentful_id'
  | 'authorBio___page___home___page___createdAt'
  | 'authorBio___page___home___page___updatedAt'
  | 'authorBio___page___home___page___node_locale'
  | 'authorBio___page___home___spaceId'
  | 'authorBio___page___home___contentful_id'
  | 'authorBio___page___home___createdAt'
  | 'authorBio___page___home___updatedAt'
  | 'authorBio___page___home___sys___revision'
  | 'authorBio___page___home___node_locale'
  | 'authorBio___page___say_hello'
  | 'authorBio___page___say_hello___id'
  | 'authorBio___page___say_hello___parent___id'
  | 'authorBio___page___say_hello___parent___children'
  | 'authorBio___page___say_hello___children'
  | 'authorBio___page___say_hello___children___id'
  | 'authorBio___page___say_hello___children___children'
  | 'authorBio___page___say_hello___internal___content'
  | 'authorBio___page___say_hello___internal___contentDigest'
  | 'authorBio___page___say_hello___internal___description'
  | 'authorBio___page___say_hello___internal___fieldOwners'
  | 'authorBio___page___say_hello___internal___ignoreType'
  | 'authorBio___page___say_hello___internal___mediaType'
  | 'authorBio___page___say_hello___internal___owner'
  | 'authorBio___page___say_hello___internal___type'
  | 'authorBio___page___say_hello___title'
  | 'authorBio___page___say_hello___contactPerson___id'
  | 'authorBio___page___say_hello___contactPerson___children'
  | 'authorBio___page___say_hello___contactPerson___firstName'
  | 'authorBio___page___say_hello___contactPerson___lastName'
  | 'authorBio___page___say_hello___contactPerson___blurbTitle'
  | 'authorBio___page___say_hello___contactPerson___blurbLead'
  | 'authorBio___page___say_hello___contactPerson___page___home'
  | 'authorBio___page___say_hello___contactPerson___page___say_hello'
  | 'authorBio___page___say_hello___contactPerson___spaceId'
  | 'authorBio___page___say_hello___contactPerson___contentful_id'
  | 'authorBio___page___say_hello___contactPerson___createdAt'
  | 'authorBio___page___say_hello___contactPerson___updatedAt'
  | 'authorBio___page___say_hello___contactPerson___node_locale'
  | 'authorBio___page___say_hello___page'
  | 'authorBio___page___say_hello___page___id'
  | 'authorBio___page___say_hello___page___children'
  | 'authorBio___page___say_hello___page___title'
  | 'authorBio___page___say_hello___page___isTopLevel'
  | 'authorBio___page___say_hello___page___index'
  | 'authorBio___page___say_hello___page___spaceId'
  | 'authorBio___page___say_hello___page___contentful_id'
  | 'authorBio___page___say_hello___page___createdAt'
  | 'authorBio___page___say_hello___page___updatedAt'
  | 'authorBio___page___say_hello___page___node_locale'
  | 'authorBio___page___say_hello___body___id'
  | 'authorBio___page___say_hello___body___children'
  | 'authorBio___page___say_hello___body___body'
  | 'authorBio___page___say_hello___spaceId'
  | 'authorBio___page___say_hello___contentful_id'
  | 'authorBio___page___say_hello___createdAt'
  | 'authorBio___page___say_hello___updatedAt'
  | 'authorBio___page___say_hello___sys___revision'
  | 'authorBio___page___say_hello___node_locale'
  | 'authorBio___page___say_hello___childContentfulPageSayHelloBodyTextNode___id'
  | 'authorBio___page___say_hello___childContentfulPageSayHelloBodyTextNode___children'
  | 'authorBio___page___say_hello___childContentfulPageSayHelloBodyTextNode___body'
  | 'authorBio___blurbDesc___id'
  | 'authorBio___blurbDesc___parent___id'
  | 'authorBio___blurbDesc___parent___children'
  | 'authorBio___blurbDesc___children'
  | 'authorBio___blurbDesc___children___id'
  | 'authorBio___blurbDesc___children___children'
  | 'authorBio___blurbDesc___internal___content'
  | 'authorBio___blurbDesc___internal___contentDigest'
  | 'authorBio___blurbDesc___internal___description'
  | 'authorBio___blurbDesc___internal___fieldOwners'
  | 'authorBio___blurbDesc___internal___ignoreType'
  | 'authorBio___blurbDesc___internal___mediaType'
  | 'authorBio___blurbDesc___internal___owner'
  | 'authorBio___blurbDesc___internal___type'
  | 'authorBio___blurbDesc___blurbDesc'
  | 'authorBio___blurbDesc___childMarkdownRemark___id'
  | 'authorBio___blurbDesc___childMarkdownRemark___excerpt'
  | 'authorBio___blurbDesc___childMarkdownRemark___rawMarkdownBody'
  | 'authorBio___blurbDesc___childMarkdownRemark___html'
  | 'authorBio___blurbDesc___childMarkdownRemark___htmlAst'
  | 'authorBio___blurbDesc___childMarkdownRemark___excerptAst'
  | 'authorBio___blurbDesc___childMarkdownRemark___headings'
  | 'authorBio___blurbDesc___childMarkdownRemark___timeToRead'
  | 'authorBio___blurbDesc___childMarkdownRemark___tableOfContents'
  | 'authorBio___blurbDesc___childMarkdownRemark___children'
  | 'authorBio___spaceId'
  | 'authorBio___contentful_id'
  | 'authorBio___createdAt'
  | 'authorBio___updatedAt'
  | 'authorBio___sys___revision'
  | 'authorBio___node_locale'
  | 'authorBio___childContentfulAuthorBlurbDescTextNode___id'
  | 'authorBio___childContentfulAuthorBlurbDescTextNode___parent___id'
  | 'authorBio___childContentfulAuthorBlurbDescTextNode___parent___children'
  | 'authorBio___childContentfulAuthorBlurbDescTextNode___children'
  | 'authorBio___childContentfulAuthorBlurbDescTextNode___children___id'
  | 'authorBio___childContentfulAuthorBlurbDescTextNode___children___children'
  | 'authorBio___childContentfulAuthorBlurbDescTextNode___internal___content'
  | 'authorBio___childContentfulAuthorBlurbDescTextNode___internal___contentDigest'
  | 'authorBio___childContentfulAuthorBlurbDescTextNode___internal___description'
  | 'authorBio___childContentfulAuthorBlurbDescTextNode___internal___fieldOwners'
  | 'authorBio___childContentfulAuthorBlurbDescTextNode___internal___ignoreType'
  | 'authorBio___childContentfulAuthorBlurbDescTextNode___internal___mediaType'
  | 'authorBio___childContentfulAuthorBlurbDescTextNode___internal___owner'
  | 'authorBio___childContentfulAuthorBlurbDescTextNode___internal___type'
  | 'authorBio___childContentfulAuthorBlurbDescTextNode___blurbDesc'
  | 'authorBio___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___id'
  | 'authorBio___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___excerpt'
  | 'authorBio___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'authorBio___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___html'
  | 'authorBio___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___htmlAst'
  | 'authorBio___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___excerptAst'
  | 'authorBio___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___headings'
  | 'authorBio___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___timeToRead'
  | 'authorBio___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___tableOfContents'
  | 'authorBio___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___children'
  | 'page'
  | 'page___id'
  | 'page___parent___id'
  | 'page___parent___parent___id'
  | 'page___parent___parent___children'
  | 'page___parent___children'
  | 'page___parent___children___id'
  | 'page___parent___children___children'
  | 'page___parent___internal___content'
  | 'page___parent___internal___contentDigest'
  | 'page___parent___internal___description'
  | 'page___parent___internal___fieldOwners'
  | 'page___parent___internal___ignoreType'
  | 'page___parent___internal___mediaType'
  | 'page___parent___internal___owner'
  | 'page___parent___internal___type'
  | 'page___children'
  | 'page___children___id'
  | 'page___children___parent___id'
  | 'page___children___parent___children'
  | 'page___children___children'
  | 'page___children___children___id'
  | 'page___children___children___children'
  | 'page___children___internal___content'
  | 'page___children___internal___contentDigest'
  | 'page___children___internal___description'
  | 'page___children___internal___fieldOwners'
  | 'page___children___internal___ignoreType'
  | 'page___children___internal___mediaType'
  | 'page___children___internal___owner'
  | 'page___children___internal___type'
  | 'page___internal___content'
  | 'page___internal___contentDigest'
  | 'page___internal___description'
  | 'page___internal___fieldOwners'
  | 'page___internal___ignoreType'
  | 'page___internal___mediaType'
  | 'page___internal___owner'
  | 'page___internal___type'
  | 'page___title'
  | 'page___isTopLevel'
  | 'page___index'
  | 'page___spaceId'
  | 'page___contentful_id'
  | 'page___createdAt'
  | 'page___updatedAt'
  | 'page___sys___revision'
  | 'page___node_locale'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale';

export type ContentfulPageHomeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  subTitle?: Maybe<StringQueryOperatorInput>;
  authorBio?: Maybe<ContentfulAuthorFilterInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPageHomeSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPageHomeFilterListInput = {
  elemMatch?: Maybe<ContentfulPageHomeFilterInput>;
};

export type ContentfulPageHomeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageHomeEdge>;
  nodes: Array<ContentfulPageHome>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPageHomeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPageHomeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPageHomeSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulPageHomeSysContentType>;
};

export type ContentfulPageHomeSysContentType = {
  sys?: Maybe<ContentfulPageHomeSysContentTypeSys>;
};

export type ContentfulPageHomeSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPageHomeSysContentTypeSysFilterInput>;
};

export type ContentfulPageHomeSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulPageHomeSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPageHomeSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulPageHomeSysContentTypeFilterInput>;
};

export type ContentfulPageSayHello = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  contactPerson?: Maybe<ContentfulAuthor>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
  body?: Maybe<ContentfulPageSayHelloBodyTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulPageSayHelloSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulPageSayHelloBodyTextNode?: Maybe<ContentfulPageSayHelloBodyTextNode>;
};


export type ContentfulPageSayHelloCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPageSayHelloUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulPageSayHelloBodyTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  body?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulPageSayHelloBodyTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageSayHelloBodyTextNodeEdge>;
  nodes: Array<ContentfulPageSayHelloBodyTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPageSayHelloBodyTextNodeGroupConnection>;
};


export type ContentfulPageSayHelloBodyTextNodeConnectionDistinctArgs = {
  field: ContentfulPageSayHelloBodyTextNodeFieldsEnum;
};


export type ContentfulPageSayHelloBodyTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPageSayHelloBodyTextNodeFieldsEnum;
};

export type ContentfulPageSayHelloBodyTextNodeEdge = {
  next?: Maybe<ContentfulPageSayHelloBodyTextNode>;
  node: ContentfulPageSayHelloBodyTextNode;
  previous?: Maybe<ContentfulPageSayHelloBodyTextNode>;
};

export type ContentfulPageSayHelloBodyTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'body'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___fields___readingTime___text'
  | 'childMarkdownRemark___fields___readingTime___minutes'
  | 'childMarkdownRemark___fields___readingTime___time'
  | 'childMarkdownRemark___fields___readingTime___words'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type ContentfulPageSayHelloBodyTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulPageSayHelloBodyTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageSayHelloBodyTextNodeEdge>;
  nodes: Array<ContentfulPageSayHelloBodyTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPageSayHelloBodyTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPageSayHelloBodyTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPageSayHelloConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageSayHelloEdge>;
  nodes: Array<ContentfulPageSayHello>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPageSayHelloGroupConnection>;
};


export type ContentfulPageSayHelloConnectionDistinctArgs = {
  field: ContentfulPageSayHelloFieldsEnum;
};


export type ContentfulPageSayHelloConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPageSayHelloFieldsEnum;
};

export type ContentfulPageSayHelloEdge = {
  next?: Maybe<ContentfulPageSayHello>;
  node: ContentfulPageSayHello;
  previous?: Maybe<ContentfulPageSayHello>;
};

export type ContentfulPageSayHelloFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'contactPerson___id'
  | 'contactPerson___parent___id'
  | 'contactPerson___parent___parent___id'
  | 'contactPerson___parent___parent___children'
  | 'contactPerson___parent___children'
  | 'contactPerson___parent___children___id'
  | 'contactPerson___parent___children___children'
  | 'contactPerson___parent___internal___content'
  | 'contactPerson___parent___internal___contentDigest'
  | 'contactPerson___parent___internal___description'
  | 'contactPerson___parent___internal___fieldOwners'
  | 'contactPerson___parent___internal___ignoreType'
  | 'contactPerson___parent___internal___mediaType'
  | 'contactPerson___parent___internal___owner'
  | 'contactPerson___parent___internal___type'
  | 'contactPerson___children'
  | 'contactPerson___children___id'
  | 'contactPerson___children___parent___id'
  | 'contactPerson___children___parent___children'
  | 'contactPerson___children___children'
  | 'contactPerson___children___children___id'
  | 'contactPerson___children___children___children'
  | 'contactPerson___children___internal___content'
  | 'contactPerson___children___internal___contentDigest'
  | 'contactPerson___children___internal___description'
  | 'contactPerson___children___internal___fieldOwners'
  | 'contactPerson___children___internal___ignoreType'
  | 'contactPerson___children___internal___mediaType'
  | 'contactPerson___children___internal___owner'
  | 'contactPerson___children___internal___type'
  | 'contactPerson___internal___content'
  | 'contactPerson___internal___contentDigest'
  | 'contactPerson___internal___description'
  | 'contactPerson___internal___fieldOwners'
  | 'contactPerson___internal___ignoreType'
  | 'contactPerson___internal___mediaType'
  | 'contactPerson___internal___owner'
  | 'contactPerson___internal___type'
  | 'contactPerson___firstName'
  | 'contactPerson___lastName'
  | 'contactPerson___blurbTitle'
  | 'contactPerson___blurbLead'
  | 'contactPerson___profilePicture___id'
  | 'contactPerson___profilePicture___parent___id'
  | 'contactPerson___profilePicture___parent___children'
  | 'contactPerson___profilePicture___children'
  | 'contactPerson___profilePicture___children___id'
  | 'contactPerson___profilePicture___children___children'
  | 'contactPerson___profilePicture___internal___content'
  | 'contactPerson___profilePicture___internal___contentDigest'
  | 'contactPerson___profilePicture___internal___description'
  | 'contactPerson___profilePicture___internal___fieldOwners'
  | 'contactPerson___profilePicture___internal___ignoreType'
  | 'contactPerson___profilePicture___internal___mediaType'
  | 'contactPerson___profilePicture___internal___owner'
  | 'contactPerson___profilePicture___internal___type'
  | 'contactPerson___profilePicture___contentful_id'
  | 'contactPerson___profilePicture___file___url'
  | 'contactPerson___profilePicture___file___fileName'
  | 'contactPerson___profilePicture___file___contentType'
  | 'contactPerson___profilePicture___title'
  | 'contactPerson___profilePicture___description'
  | 'contactPerson___profilePicture___node_locale'
  | 'contactPerson___profilePicture___fixed___base64'
  | 'contactPerson___profilePicture___fixed___tracedSVG'
  | 'contactPerson___profilePicture___fixed___aspectRatio'
  | 'contactPerson___profilePicture___fixed___width'
  | 'contactPerson___profilePicture___fixed___height'
  | 'contactPerson___profilePicture___fixed___src'
  | 'contactPerson___profilePicture___fixed___srcSet'
  | 'contactPerson___profilePicture___fixed___srcWebp'
  | 'contactPerson___profilePicture___fixed___srcSetWebp'
  | 'contactPerson___profilePicture___resolutions___base64'
  | 'contactPerson___profilePicture___resolutions___tracedSVG'
  | 'contactPerson___profilePicture___resolutions___aspectRatio'
  | 'contactPerson___profilePicture___resolutions___width'
  | 'contactPerson___profilePicture___resolutions___height'
  | 'contactPerson___profilePicture___resolutions___src'
  | 'contactPerson___profilePicture___resolutions___srcSet'
  | 'contactPerson___profilePicture___resolutions___srcWebp'
  | 'contactPerson___profilePicture___resolutions___srcSetWebp'
  | 'contactPerson___profilePicture___fluid___base64'
  | 'contactPerson___profilePicture___fluid___tracedSVG'
  | 'contactPerson___profilePicture___fluid___aspectRatio'
  | 'contactPerson___profilePicture___fluid___src'
  | 'contactPerson___profilePicture___fluid___srcSet'
  | 'contactPerson___profilePicture___fluid___srcWebp'
  | 'contactPerson___profilePicture___fluid___srcSetWebp'
  | 'contactPerson___profilePicture___fluid___sizes'
  | 'contactPerson___profilePicture___sizes___base64'
  | 'contactPerson___profilePicture___sizes___tracedSVG'
  | 'contactPerson___profilePicture___sizes___aspectRatio'
  | 'contactPerson___profilePicture___sizes___src'
  | 'contactPerson___profilePicture___sizes___srcSet'
  | 'contactPerson___profilePicture___sizes___srcWebp'
  | 'contactPerson___profilePicture___sizes___srcSetWebp'
  | 'contactPerson___profilePicture___sizes___sizes'
  | 'contactPerson___profilePicture___resize___base64'
  | 'contactPerson___profilePicture___resize___tracedSVG'
  | 'contactPerson___profilePicture___resize___src'
  | 'contactPerson___profilePicture___resize___width'
  | 'contactPerson___profilePicture___resize___height'
  | 'contactPerson___profilePicture___resize___aspectRatio'
  | 'contactPerson___socialLinks___id'
  | 'contactPerson___socialLinks___parent___id'
  | 'contactPerson___socialLinks___parent___children'
  | 'contactPerson___socialLinks___children'
  | 'contactPerson___socialLinks___children___id'
  | 'contactPerson___socialLinks___children___children'
  | 'contactPerson___socialLinks___internal___content'
  | 'contactPerson___socialLinks___internal___contentDigest'
  | 'contactPerson___socialLinks___internal___description'
  | 'contactPerson___socialLinks___internal___fieldOwners'
  | 'contactPerson___socialLinks___internal___ignoreType'
  | 'contactPerson___socialLinks___internal___mediaType'
  | 'contactPerson___socialLinks___internal___owner'
  | 'contactPerson___socialLinks___internal___type'
  | 'contactPerson___socialLinks___nickname'
  | 'contactPerson___socialLinks___email'
  | 'contactPerson___socialLinks___linkedin'
  | 'contactPerson___socialLinks___instagram'
  | 'contactPerson___socialLinks___twitter'
  | 'contactPerson___socialLinks___github'
  | 'contactPerson___socialLinks___devTo'
  | 'contactPerson___socialLinks___author'
  | 'contactPerson___socialLinks___author___id'
  | 'contactPerson___socialLinks___author___children'
  | 'contactPerson___socialLinks___author___firstName'
  | 'contactPerson___socialLinks___author___lastName'
  | 'contactPerson___socialLinks___author___blurbTitle'
  | 'contactPerson___socialLinks___author___blurbLead'
  | 'contactPerson___socialLinks___author___page___home'
  | 'contactPerson___socialLinks___author___page___say_hello'
  | 'contactPerson___socialLinks___author___spaceId'
  | 'contactPerson___socialLinks___author___contentful_id'
  | 'contactPerson___socialLinks___author___createdAt'
  | 'contactPerson___socialLinks___author___updatedAt'
  | 'contactPerson___socialLinks___author___node_locale'
  | 'contactPerson___socialLinks___spaceId'
  | 'contactPerson___socialLinks___contentful_id'
  | 'contactPerson___socialLinks___createdAt'
  | 'contactPerson___socialLinks___updatedAt'
  | 'contactPerson___socialLinks___sys___revision'
  | 'contactPerson___socialLinks___node_locale'
  | 'contactPerson___page___home'
  | 'contactPerson___page___home___id'
  | 'contactPerson___page___home___parent___id'
  | 'contactPerson___page___home___parent___children'
  | 'contactPerson___page___home___children'
  | 'contactPerson___page___home___children___id'
  | 'contactPerson___page___home___children___children'
  | 'contactPerson___page___home___internal___content'
  | 'contactPerson___page___home___internal___contentDigest'
  | 'contactPerson___page___home___internal___description'
  | 'contactPerson___page___home___internal___fieldOwners'
  | 'contactPerson___page___home___internal___ignoreType'
  | 'contactPerson___page___home___internal___mediaType'
  | 'contactPerson___page___home___internal___owner'
  | 'contactPerson___page___home___internal___type'
  | 'contactPerson___page___home___title'
  | 'contactPerson___page___home___subTitle'
  | 'contactPerson___page___home___authorBio___id'
  | 'contactPerson___page___home___authorBio___children'
  | 'contactPerson___page___home___authorBio___firstName'
  | 'contactPerson___page___home___authorBio___lastName'
  | 'contactPerson___page___home___authorBio___blurbTitle'
  | 'contactPerson___page___home___authorBio___blurbLead'
  | 'contactPerson___page___home___authorBio___page___home'
  | 'contactPerson___page___home___authorBio___page___say_hello'
  | 'contactPerson___page___home___authorBio___spaceId'
  | 'contactPerson___page___home___authorBio___contentful_id'
  | 'contactPerson___page___home___authorBio___createdAt'
  | 'contactPerson___page___home___authorBio___updatedAt'
  | 'contactPerson___page___home___authorBio___node_locale'
  | 'contactPerson___page___home___page'
  | 'contactPerson___page___home___page___id'
  | 'contactPerson___page___home___page___children'
  | 'contactPerson___page___home___page___title'
  | 'contactPerson___page___home___page___isTopLevel'
  | 'contactPerson___page___home___page___index'
  | 'contactPerson___page___home___page___spaceId'
  | 'contactPerson___page___home___page___contentful_id'
  | 'contactPerson___page___home___page___createdAt'
  | 'contactPerson___page___home___page___updatedAt'
  | 'contactPerson___page___home___page___node_locale'
  | 'contactPerson___page___home___spaceId'
  | 'contactPerson___page___home___contentful_id'
  | 'contactPerson___page___home___createdAt'
  | 'contactPerson___page___home___updatedAt'
  | 'contactPerson___page___home___sys___revision'
  | 'contactPerson___page___home___node_locale'
  | 'contactPerson___page___say_hello'
  | 'contactPerson___page___say_hello___id'
  | 'contactPerson___page___say_hello___parent___id'
  | 'contactPerson___page___say_hello___parent___children'
  | 'contactPerson___page___say_hello___children'
  | 'contactPerson___page___say_hello___children___id'
  | 'contactPerson___page___say_hello___children___children'
  | 'contactPerson___page___say_hello___internal___content'
  | 'contactPerson___page___say_hello___internal___contentDigest'
  | 'contactPerson___page___say_hello___internal___description'
  | 'contactPerson___page___say_hello___internal___fieldOwners'
  | 'contactPerson___page___say_hello___internal___ignoreType'
  | 'contactPerson___page___say_hello___internal___mediaType'
  | 'contactPerson___page___say_hello___internal___owner'
  | 'contactPerson___page___say_hello___internal___type'
  | 'contactPerson___page___say_hello___title'
  | 'contactPerson___page___say_hello___contactPerson___id'
  | 'contactPerson___page___say_hello___contactPerson___children'
  | 'contactPerson___page___say_hello___contactPerson___firstName'
  | 'contactPerson___page___say_hello___contactPerson___lastName'
  | 'contactPerson___page___say_hello___contactPerson___blurbTitle'
  | 'contactPerson___page___say_hello___contactPerson___blurbLead'
  | 'contactPerson___page___say_hello___contactPerson___page___home'
  | 'contactPerson___page___say_hello___contactPerson___page___say_hello'
  | 'contactPerson___page___say_hello___contactPerson___spaceId'
  | 'contactPerson___page___say_hello___contactPerson___contentful_id'
  | 'contactPerson___page___say_hello___contactPerson___createdAt'
  | 'contactPerson___page___say_hello___contactPerson___updatedAt'
  | 'contactPerson___page___say_hello___contactPerson___node_locale'
  | 'contactPerson___page___say_hello___page'
  | 'contactPerson___page___say_hello___page___id'
  | 'contactPerson___page___say_hello___page___children'
  | 'contactPerson___page___say_hello___page___title'
  | 'contactPerson___page___say_hello___page___isTopLevel'
  | 'contactPerson___page___say_hello___page___index'
  | 'contactPerson___page___say_hello___page___spaceId'
  | 'contactPerson___page___say_hello___page___contentful_id'
  | 'contactPerson___page___say_hello___page___createdAt'
  | 'contactPerson___page___say_hello___page___updatedAt'
  | 'contactPerson___page___say_hello___page___node_locale'
  | 'contactPerson___page___say_hello___body___id'
  | 'contactPerson___page___say_hello___body___children'
  | 'contactPerson___page___say_hello___body___body'
  | 'contactPerson___page___say_hello___spaceId'
  | 'contactPerson___page___say_hello___contentful_id'
  | 'contactPerson___page___say_hello___createdAt'
  | 'contactPerson___page___say_hello___updatedAt'
  | 'contactPerson___page___say_hello___sys___revision'
  | 'contactPerson___page___say_hello___node_locale'
  | 'contactPerson___page___say_hello___childContentfulPageSayHelloBodyTextNode___id'
  | 'contactPerson___page___say_hello___childContentfulPageSayHelloBodyTextNode___children'
  | 'contactPerson___page___say_hello___childContentfulPageSayHelloBodyTextNode___body'
  | 'contactPerson___blurbDesc___id'
  | 'contactPerson___blurbDesc___parent___id'
  | 'contactPerson___blurbDesc___parent___children'
  | 'contactPerson___blurbDesc___children'
  | 'contactPerson___blurbDesc___children___id'
  | 'contactPerson___blurbDesc___children___children'
  | 'contactPerson___blurbDesc___internal___content'
  | 'contactPerson___blurbDesc___internal___contentDigest'
  | 'contactPerson___blurbDesc___internal___description'
  | 'contactPerson___blurbDesc___internal___fieldOwners'
  | 'contactPerson___blurbDesc___internal___ignoreType'
  | 'contactPerson___blurbDesc___internal___mediaType'
  | 'contactPerson___blurbDesc___internal___owner'
  | 'contactPerson___blurbDesc___internal___type'
  | 'contactPerson___blurbDesc___blurbDesc'
  | 'contactPerson___blurbDesc___childMarkdownRemark___id'
  | 'contactPerson___blurbDesc___childMarkdownRemark___excerpt'
  | 'contactPerson___blurbDesc___childMarkdownRemark___rawMarkdownBody'
  | 'contactPerson___blurbDesc___childMarkdownRemark___html'
  | 'contactPerson___blurbDesc___childMarkdownRemark___htmlAst'
  | 'contactPerson___blurbDesc___childMarkdownRemark___excerptAst'
  | 'contactPerson___blurbDesc___childMarkdownRemark___headings'
  | 'contactPerson___blurbDesc___childMarkdownRemark___timeToRead'
  | 'contactPerson___blurbDesc___childMarkdownRemark___tableOfContents'
  | 'contactPerson___blurbDesc___childMarkdownRemark___children'
  | 'contactPerson___spaceId'
  | 'contactPerson___contentful_id'
  | 'contactPerson___createdAt'
  | 'contactPerson___updatedAt'
  | 'contactPerson___sys___revision'
  | 'contactPerson___node_locale'
  | 'contactPerson___childContentfulAuthorBlurbDescTextNode___id'
  | 'contactPerson___childContentfulAuthorBlurbDescTextNode___parent___id'
  | 'contactPerson___childContentfulAuthorBlurbDescTextNode___parent___children'
  | 'contactPerson___childContentfulAuthorBlurbDescTextNode___children'
  | 'contactPerson___childContentfulAuthorBlurbDescTextNode___children___id'
  | 'contactPerson___childContentfulAuthorBlurbDescTextNode___children___children'
  | 'contactPerson___childContentfulAuthorBlurbDescTextNode___internal___content'
  | 'contactPerson___childContentfulAuthorBlurbDescTextNode___internal___contentDigest'
  | 'contactPerson___childContentfulAuthorBlurbDescTextNode___internal___description'
  | 'contactPerson___childContentfulAuthorBlurbDescTextNode___internal___fieldOwners'
  | 'contactPerson___childContentfulAuthorBlurbDescTextNode___internal___ignoreType'
  | 'contactPerson___childContentfulAuthorBlurbDescTextNode___internal___mediaType'
  | 'contactPerson___childContentfulAuthorBlurbDescTextNode___internal___owner'
  | 'contactPerson___childContentfulAuthorBlurbDescTextNode___internal___type'
  | 'contactPerson___childContentfulAuthorBlurbDescTextNode___blurbDesc'
  | 'contactPerson___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___id'
  | 'contactPerson___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___excerpt'
  | 'contactPerson___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'contactPerson___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___html'
  | 'contactPerson___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___htmlAst'
  | 'contactPerson___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___excerptAst'
  | 'contactPerson___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___headings'
  | 'contactPerson___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___timeToRead'
  | 'contactPerson___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___tableOfContents'
  | 'contactPerson___childContentfulAuthorBlurbDescTextNode___childMarkdownRemark___children'
  | 'page'
  | 'page___id'
  | 'page___parent___id'
  | 'page___parent___parent___id'
  | 'page___parent___parent___children'
  | 'page___parent___children'
  | 'page___parent___children___id'
  | 'page___parent___children___children'
  | 'page___parent___internal___content'
  | 'page___parent___internal___contentDigest'
  | 'page___parent___internal___description'
  | 'page___parent___internal___fieldOwners'
  | 'page___parent___internal___ignoreType'
  | 'page___parent___internal___mediaType'
  | 'page___parent___internal___owner'
  | 'page___parent___internal___type'
  | 'page___children'
  | 'page___children___id'
  | 'page___children___parent___id'
  | 'page___children___parent___children'
  | 'page___children___children'
  | 'page___children___children___id'
  | 'page___children___children___children'
  | 'page___children___internal___content'
  | 'page___children___internal___contentDigest'
  | 'page___children___internal___description'
  | 'page___children___internal___fieldOwners'
  | 'page___children___internal___ignoreType'
  | 'page___children___internal___mediaType'
  | 'page___children___internal___owner'
  | 'page___children___internal___type'
  | 'page___internal___content'
  | 'page___internal___contentDigest'
  | 'page___internal___description'
  | 'page___internal___fieldOwners'
  | 'page___internal___ignoreType'
  | 'page___internal___mediaType'
  | 'page___internal___owner'
  | 'page___internal___type'
  | 'page___title'
  | 'page___isTopLevel'
  | 'page___index'
  | 'page___spaceId'
  | 'page___contentful_id'
  | 'page___createdAt'
  | 'page___updatedAt'
  | 'page___sys___revision'
  | 'page___node_locale'
  | 'body___id'
  | 'body___parent___id'
  | 'body___parent___parent___id'
  | 'body___parent___parent___children'
  | 'body___parent___children'
  | 'body___parent___children___id'
  | 'body___parent___children___children'
  | 'body___parent___internal___content'
  | 'body___parent___internal___contentDigest'
  | 'body___parent___internal___description'
  | 'body___parent___internal___fieldOwners'
  | 'body___parent___internal___ignoreType'
  | 'body___parent___internal___mediaType'
  | 'body___parent___internal___owner'
  | 'body___parent___internal___type'
  | 'body___children'
  | 'body___children___id'
  | 'body___children___parent___id'
  | 'body___children___parent___children'
  | 'body___children___children'
  | 'body___children___children___id'
  | 'body___children___children___children'
  | 'body___children___internal___content'
  | 'body___children___internal___contentDigest'
  | 'body___children___internal___description'
  | 'body___children___internal___fieldOwners'
  | 'body___children___internal___ignoreType'
  | 'body___children___internal___mediaType'
  | 'body___children___internal___owner'
  | 'body___children___internal___type'
  | 'body___internal___content'
  | 'body___internal___contentDigest'
  | 'body___internal___description'
  | 'body___internal___fieldOwners'
  | 'body___internal___ignoreType'
  | 'body___internal___mediaType'
  | 'body___internal___owner'
  | 'body___internal___type'
  | 'body___body'
  | 'body___childMarkdownRemark___id'
  | 'body___childMarkdownRemark___frontmatter___title'
  | 'body___childMarkdownRemark___excerpt'
  | 'body___childMarkdownRemark___rawMarkdownBody'
  | 'body___childMarkdownRemark___html'
  | 'body___childMarkdownRemark___htmlAst'
  | 'body___childMarkdownRemark___excerptAst'
  | 'body___childMarkdownRemark___headings'
  | 'body___childMarkdownRemark___headings___id'
  | 'body___childMarkdownRemark___headings___value'
  | 'body___childMarkdownRemark___headings___depth'
  | 'body___childMarkdownRemark___timeToRead'
  | 'body___childMarkdownRemark___tableOfContents'
  | 'body___childMarkdownRemark___wordCount___paragraphs'
  | 'body___childMarkdownRemark___wordCount___sentences'
  | 'body___childMarkdownRemark___wordCount___words'
  | 'body___childMarkdownRemark___parent___id'
  | 'body___childMarkdownRemark___parent___children'
  | 'body___childMarkdownRemark___children'
  | 'body___childMarkdownRemark___children___id'
  | 'body___childMarkdownRemark___children___children'
  | 'body___childMarkdownRemark___internal___content'
  | 'body___childMarkdownRemark___internal___contentDigest'
  | 'body___childMarkdownRemark___internal___description'
  | 'body___childMarkdownRemark___internal___fieldOwners'
  | 'body___childMarkdownRemark___internal___ignoreType'
  | 'body___childMarkdownRemark___internal___mediaType'
  | 'body___childMarkdownRemark___internal___owner'
  | 'body___childMarkdownRemark___internal___type'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'childContentfulPageSayHelloBodyTextNode___id'
  | 'childContentfulPageSayHelloBodyTextNode___parent___id'
  | 'childContentfulPageSayHelloBodyTextNode___parent___parent___id'
  | 'childContentfulPageSayHelloBodyTextNode___parent___parent___children'
  | 'childContentfulPageSayHelloBodyTextNode___parent___children'
  | 'childContentfulPageSayHelloBodyTextNode___parent___children___id'
  | 'childContentfulPageSayHelloBodyTextNode___parent___children___children'
  | 'childContentfulPageSayHelloBodyTextNode___parent___internal___content'
  | 'childContentfulPageSayHelloBodyTextNode___parent___internal___contentDigest'
  | 'childContentfulPageSayHelloBodyTextNode___parent___internal___description'
  | 'childContentfulPageSayHelloBodyTextNode___parent___internal___fieldOwners'
  | 'childContentfulPageSayHelloBodyTextNode___parent___internal___ignoreType'
  | 'childContentfulPageSayHelloBodyTextNode___parent___internal___mediaType'
  | 'childContentfulPageSayHelloBodyTextNode___parent___internal___owner'
  | 'childContentfulPageSayHelloBodyTextNode___parent___internal___type'
  | 'childContentfulPageSayHelloBodyTextNode___children'
  | 'childContentfulPageSayHelloBodyTextNode___children___id'
  | 'childContentfulPageSayHelloBodyTextNode___children___parent___id'
  | 'childContentfulPageSayHelloBodyTextNode___children___parent___children'
  | 'childContentfulPageSayHelloBodyTextNode___children___children'
  | 'childContentfulPageSayHelloBodyTextNode___children___children___id'
  | 'childContentfulPageSayHelloBodyTextNode___children___children___children'
  | 'childContentfulPageSayHelloBodyTextNode___children___internal___content'
  | 'childContentfulPageSayHelloBodyTextNode___children___internal___contentDigest'
  | 'childContentfulPageSayHelloBodyTextNode___children___internal___description'
  | 'childContentfulPageSayHelloBodyTextNode___children___internal___fieldOwners'
  | 'childContentfulPageSayHelloBodyTextNode___children___internal___ignoreType'
  | 'childContentfulPageSayHelloBodyTextNode___children___internal___mediaType'
  | 'childContentfulPageSayHelloBodyTextNode___children___internal___owner'
  | 'childContentfulPageSayHelloBodyTextNode___children___internal___type'
  | 'childContentfulPageSayHelloBodyTextNode___internal___content'
  | 'childContentfulPageSayHelloBodyTextNode___internal___contentDigest'
  | 'childContentfulPageSayHelloBodyTextNode___internal___description'
  | 'childContentfulPageSayHelloBodyTextNode___internal___fieldOwners'
  | 'childContentfulPageSayHelloBodyTextNode___internal___ignoreType'
  | 'childContentfulPageSayHelloBodyTextNode___internal___mediaType'
  | 'childContentfulPageSayHelloBodyTextNode___internal___owner'
  | 'childContentfulPageSayHelloBodyTextNode___internal___type'
  | 'childContentfulPageSayHelloBodyTextNode___body'
  | 'childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___id'
  | 'childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___frontmatter___title'
  | 'childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___excerpt'
  | 'childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___html'
  | 'childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___htmlAst'
  | 'childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___excerptAst'
  | 'childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___headings'
  | 'childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___headings___id'
  | 'childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___headings___value'
  | 'childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___headings___depth'
  | 'childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___timeToRead'
  | 'childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___tableOfContents'
  | 'childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___wordCount___paragraphs'
  | 'childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___wordCount___sentences'
  | 'childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___wordCount___words'
  | 'childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___parent___id'
  | 'childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___parent___children'
  | 'childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___children'
  | 'childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___children___id'
  | 'childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___children___children'
  | 'childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___internal___content'
  | 'childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___internal___contentDigest'
  | 'childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___internal___description'
  | 'childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___internal___fieldOwners'
  | 'childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___internal___ignoreType'
  | 'childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___internal___mediaType'
  | 'childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___internal___owner'
  | 'childContentfulPageSayHelloBodyTextNode___childMarkdownRemark___internal___type';

export type ContentfulPageSayHelloFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  contactPerson?: Maybe<ContentfulAuthorFilterInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  body?: Maybe<ContentfulPageSayHelloBodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPageSayHelloSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulPageSayHelloBodyTextNode?: Maybe<ContentfulPageSayHelloBodyTextNodeFilterInput>;
};

export type ContentfulPageSayHelloFilterListInput = {
  elemMatch?: Maybe<ContentfulPageSayHelloFilterInput>;
};

export type ContentfulPageSayHelloGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageSayHelloEdge>;
  nodes: Array<ContentfulPageSayHello>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPageSayHelloSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPageSayHelloFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPageSayHelloSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulPageSayHelloSysContentType>;
};

export type ContentfulPageSayHelloSysContentType = {
  sys?: Maybe<ContentfulPageSayHelloSysContentTypeSys>;
};

export type ContentfulPageSayHelloSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPageSayHelloSysContentTypeSysFilterInput>;
};

export type ContentfulPageSayHelloSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulPageSayHelloSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPageSayHelloSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulPageSayHelloSysContentTypeFilterInput>;
};

export type ContentfulPageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPageSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulPageSysContentType>;
};

export type ContentfulPageSysContentType = {
  sys?: Maybe<ContentfulPageSysContentTypeSys>;
};

export type ContentfulPageSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPageSysContentTypeSysFilterInput>;
};

export type ContentfulPageSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulPageSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPageSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulPageSysContentTypeFilterInput>;
};

export type ContentfulPost = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  meta?: Maybe<ContentfulMeta>;
  series?: Maybe<ContentfulPostSeries>;
  body?: Maybe<ContentfulPostBodyTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulPostSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulPostBodyTextNode?: Maybe<ContentfulPostBodyTextNode>;
};


export type ContentfulPostCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPostUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulPostBodyTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  body?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulPostBodyTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPostBodyTextNodeEdge>;
  nodes: Array<ContentfulPostBodyTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPostBodyTextNodeGroupConnection>;
};


export type ContentfulPostBodyTextNodeConnectionDistinctArgs = {
  field: ContentfulPostBodyTextNodeFieldsEnum;
};


export type ContentfulPostBodyTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPostBodyTextNodeFieldsEnum;
};

export type ContentfulPostBodyTextNodeEdge = {
  next?: Maybe<ContentfulPostBodyTextNode>;
  node: ContentfulPostBodyTextNode;
  previous?: Maybe<ContentfulPostBodyTextNode>;
};

export type ContentfulPostBodyTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'body'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___fields___readingTime___text'
  | 'childMarkdownRemark___fields___readingTime___minutes'
  | 'childMarkdownRemark___fields___readingTime___time'
  | 'childMarkdownRemark___fields___readingTime___words'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type ContentfulPostBodyTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulPostBodyTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPostBodyTextNodeEdge>;
  nodes: Array<ContentfulPostBodyTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPostBodyTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPostBodyTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPostEdge>;
  nodes: Array<ContentfulPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPostGroupConnection>;
};


export type ContentfulPostConnectionDistinctArgs = {
  field: ContentfulPostFieldsEnum;
};


export type ContentfulPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPostFieldsEnum;
};

export type ContentfulPostEdge = {
  next?: Maybe<ContentfulPost>;
  node: ContentfulPost;
  previous?: Maybe<ContentfulPost>;
};

export type ContentfulPostFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'meta___id'
  | 'meta___parent___id'
  | 'meta___parent___parent___id'
  | 'meta___parent___parent___children'
  | 'meta___parent___children'
  | 'meta___parent___children___id'
  | 'meta___parent___children___children'
  | 'meta___parent___internal___content'
  | 'meta___parent___internal___contentDigest'
  | 'meta___parent___internal___description'
  | 'meta___parent___internal___fieldOwners'
  | 'meta___parent___internal___ignoreType'
  | 'meta___parent___internal___mediaType'
  | 'meta___parent___internal___owner'
  | 'meta___parent___internal___type'
  | 'meta___children'
  | 'meta___children___id'
  | 'meta___children___parent___id'
  | 'meta___children___parent___children'
  | 'meta___children___children'
  | 'meta___children___children___id'
  | 'meta___children___children___children'
  | 'meta___children___internal___content'
  | 'meta___children___internal___contentDigest'
  | 'meta___children___internal___description'
  | 'meta___children___internal___fieldOwners'
  | 'meta___children___internal___ignoreType'
  | 'meta___children___internal___mediaType'
  | 'meta___children___internal___owner'
  | 'meta___children___internal___type'
  | 'meta___internal___content'
  | 'meta___internal___contentDigest'
  | 'meta___internal___description'
  | 'meta___internal___fieldOwners'
  | 'meta___internal___ignoreType'
  | 'meta___internal___mediaType'
  | 'meta___internal___owner'
  | 'meta___internal___type'
  | 'meta___slug'
  | 'meta___entryDate'
  | 'meta___tags'
  | 'meta___post___series'
  | 'meta___post___series___id'
  | 'meta___post___series___parent___id'
  | 'meta___post___series___parent___children'
  | 'meta___post___series___children'
  | 'meta___post___series___children___id'
  | 'meta___post___series___children___children'
  | 'meta___post___series___internal___content'
  | 'meta___post___series___internal___contentDigest'
  | 'meta___post___series___internal___description'
  | 'meta___post___series___internal___fieldOwners'
  | 'meta___post___series___internal___ignoreType'
  | 'meta___post___series___internal___mediaType'
  | 'meta___post___series___internal___owner'
  | 'meta___post___series___internal___type'
  | 'meta___post___series___title'
  | 'meta___post___series___meta___id'
  | 'meta___post___series___meta___children'
  | 'meta___post___series___meta___slug'
  | 'meta___post___series___meta___entryDate'
  | 'meta___post___series___meta___tags'
  | 'meta___post___series___meta___post___series'
  | 'meta___post___series___meta___spaceId'
  | 'meta___post___series___meta___contentful_id'
  | 'meta___post___series___meta___createdAt'
  | 'meta___post___series___meta___updatedAt'
  | 'meta___post___series___meta___node_locale'
  | 'meta___post___series___meta___post'
  | 'meta___post___series___meta___page'
  | 'meta___post___series___post'
  | 'meta___post___series___post___id'
  | 'meta___post___series___post___children'
  | 'meta___post___series___post___title'
  | 'meta___post___series___post___spaceId'
  | 'meta___post___series___post___contentful_id'
  | 'meta___post___series___post___createdAt'
  | 'meta___post___series___post___updatedAt'
  | 'meta___post___series___post___node_locale'
  | 'meta___post___series___spaceId'
  | 'meta___post___series___contentful_id'
  | 'meta___post___series___createdAt'
  | 'meta___post___series___updatedAt'
  | 'meta___post___series___sys___revision'
  | 'meta___post___series___node_locale'
  | 'meta___desc___id'
  | 'meta___desc___parent___id'
  | 'meta___desc___parent___children'
  | 'meta___desc___children'
  | 'meta___desc___children___id'
  | 'meta___desc___children___children'
  | 'meta___desc___internal___content'
  | 'meta___desc___internal___contentDigest'
  | 'meta___desc___internal___description'
  | 'meta___desc___internal___fieldOwners'
  | 'meta___desc___internal___ignoreType'
  | 'meta___desc___internal___mediaType'
  | 'meta___desc___internal___owner'
  | 'meta___desc___internal___type'
  | 'meta___desc___desc'
  | 'meta___desc___childMarkdownRemark___id'
  | 'meta___desc___childMarkdownRemark___excerpt'
  | 'meta___desc___childMarkdownRemark___rawMarkdownBody'
  | 'meta___desc___childMarkdownRemark___html'
  | 'meta___desc___childMarkdownRemark___htmlAst'
  | 'meta___desc___childMarkdownRemark___excerptAst'
  | 'meta___desc___childMarkdownRemark___headings'
  | 'meta___desc___childMarkdownRemark___timeToRead'
  | 'meta___desc___childMarkdownRemark___tableOfContents'
  | 'meta___desc___childMarkdownRemark___children'
  | 'meta___spaceId'
  | 'meta___contentful_id'
  | 'meta___createdAt'
  | 'meta___updatedAt'
  | 'meta___sys___revision'
  | 'meta___node_locale'
  | 'meta___post'
  | 'meta___post___id'
  | 'meta___post___parent___id'
  | 'meta___post___parent___children'
  | 'meta___post___children'
  | 'meta___post___children___id'
  | 'meta___post___children___children'
  | 'meta___post___internal___content'
  | 'meta___post___internal___contentDigest'
  | 'meta___post___internal___description'
  | 'meta___post___internal___fieldOwners'
  | 'meta___post___internal___ignoreType'
  | 'meta___post___internal___mediaType'
  | 'meta___post___internal___owner'
  | 'meta___post___internal___type'
  | 'meta___post___title'
  | 'meta___post___meta___id'
  | 'meta___post___meta___children'
  | 'meta___post___meta___slug'
  | 'meta___post___meta___entryDate'
  | 'meta___post___meta___tags'
  | 'meta___post___meta___post___series'
  | 'meta___post___meta___spaceId'
  | 'meta___post___meta___contentful_id'
  | 'meta___post___meta___createdAt'
  | 'meta___post___meta___updatedAt'
  | 'meta___post___meta___node_locale'
  | 'meta___post___meta___post'
  | 'meta___post___meta___page'
  | 'meta___post___body___id'
  | 'meta___post___body___children'
  | 'meta___post___body___body'
  | 'meta___post___spaceId'
  | 'meta___post___contentful_id'
  | 'meta___post___createdAt'
  | 'meta___post___updatedAt'
  | 'meta___post___sys___revision'
  | 'meta___post___node_locale'
  | 'meta___post___childContentfulPostBodyTextNode___id'
  | 'meta___post___childContentfulPostBodyTextNode___children'
  | 'meta___post___childContentfulPostBodyTextNode___body'
  | 'meta___page'
  | 'meta___page___id'
  | 'meta___page___parent___id'
  | 'meta___page___parent___children'
  | 'meta___page___children'
  | 'meta___page___children___id'
  | 'meta___page___children___children'
  | 'meta___page___internal___content'
  | 'meta___page___internal___contentDigest'
  | 'meta___page___internal___description'
  | 'meta___page___internal___fieldOwners'
  | 'meta___page___internal___ignoreType'
  | 'meta___page___internal___mediaType'
  | 'meta___page___internal___owner'
  | 'meta___page___internal___type'
  | 'meta___page___title'
  | 'meta___page___isTopLevel'
  | 'meta___page___index'
  | 'meta___page___spaceId'
  | 'meta___page___contentful_id'
  | 'meta___page___createdAt'
  | 'meta___page___updatedAt'
  | 'meta___page___sys___revision'
  | 'meta___page___node_locale'
  | 'meta___childContentfulMetaDescTextNode___id'
  | 'meta___childContentfulMetaDescTextNode___parent___id'
  | 'meta___childContentfulMetaDescTextNode___parent___children'
  | 'meta___childContentfulMetaDescTextNode___children'
  | 'meta___childContentfulMetaDescTextNode___children___id'
  | 'meta___childContentfulMetaDescTextNode___children___children'
  | 'meta___childContentfulMetaDescTextNode___internal___content'
  | 'meta___childContentfulMetaDescTextNode___internal___contentDigest'
  | 'meta___childContentfulMetaDescTextNode___internal___description'
  | 'meta___childContentfulMetaDescTextNode___internal___fieldOwners'
  | 'meta___childContentfulMetaDescTextNode___internal___ignoreType'
  | 'meta___childContentfulMetaDescTextNode___internal___mediaType'
  | 'meta___childContentfulMetaDescTextNode___internal___owner'
  | 'meta___childContentfulMetaDescTextNode___internal___type'
  | 'meta___childContentfulMetaDescTextNode___desc'
  | 'meta___childContentfulMetaDescTextNode___childMarkdownRemark___id'
  | 'meta___childContentfulMetaDescTextNode___childMarkdownRemark___excerpt'
  | 'meta___childContentfulMetaDescTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'meta___childContentfulMetaDescTextNode___childMarkdownRemark___html'
  | 'meta___childContentfulMetaDescTextNode___childMarkdownRemark___htmlAst'
  | 'meta___childContentfulMetaDescTextNode___childMarkdownRemark___excerptAst'
  | 'meta___childContentfulMetaDescTextNode___childMarkdownRemark___headings'
  | 'meta___childContentfulMetaDescTextNode___childMarkdownRemark___timeToRead'
  | 'meta___childContentfulMetaDescTextNode___childMarkdownRemark___tableOfContents'
  | 'meta___childContentfulMetaDescTextNode___childMarkdownRemark___children'
  | 'series___id'
  | 'series___parent___id'
  | 'series___parent___parent___id'
  | 'series___parent___parent___children'
  | 'series___parent___children'
  | 'series___parent___children___id'
  | 'series___parent___children___children'
  | 'series___parent___internal___content'
  | 'series___parent___internal___contentDigest'
  | 'series___parent___internal___description'
  | 'series___parent___internal___fieldOwners'
  | 'series___parent___internal___ignoreType'
  | 'series___parent___internal___mediaType'
  | 'series___parent___internal___owner'
  | 'series___parent___internal___type'
  | 'series___children'
  | 'series___children___id'
  | 'series___children___parent___id'
  | 'series___children___parent___children'
  | 'series___children___children'
  | 'series___children___children___id'
  | 'series___children___children___children'
  | 'series___children___internal___content'
  | 'series___children___internal___contentDigest'
  | 'series___children___internal___description'
  | 'series___children___internal___fieldOwners'
  | 'series___children___internal___ignoreType'
  | 'series___children___internal___mediaType'
  | 'series___children___internal___owner'
  | 'series___children___internal___type'
  | 'series___internal___content'
  | 'series___internal___contentDigest'
  | 'series___internal___description'
  | 'series___internal___fieldOwners'
  | 'series___internal___ignoreType'
  | 'series___internal___mediaType'
  | 'series___internal___owner'
  | 'series___internal___type'
  | 'series___title'
  | 'series___meta___id'
  | 'series___meta___parent___id'
  | 'series___meta___parent___children'
  | 'series___meta___children'
  | 'series___meta___children___id'
  | 'series___meta___children___children'
  | 'series___meta___internal___content'
  | 'series___meta___internal___contentDigest'
  | 'series___meta___internal___description'
  | 'series___meta___internal___fieldOwners'
  | 'series___meta___internal___ignoreType'
  | 'series___meta___internal___mediaType'
  | 'series___meta___internal___owner'
  | 'series___meta___internal___type'
  | 'series___meta___slug'
  | 'series___meta___entryDate'
  | 'series___meta___tags'
  | 'series___meta___post___series'
  | 'series___meta___post___series___id'
  | 'series___meta___post___series___children'
  | 'series___meta___post___series___title'
  | 'series___meta___post___series___post'
  | 'series___meta___post___series___spaceId'
  | 'series___meta___post___series___contentful_id'
  | 'series___meta___post___series___createdAt'
  | 'series___meta___post___series___updatedAt'
  | 'series___meta___post___series___node_locale'
  | 'series___meta___desc___id'
  | 'series___meta___desc___children'
  | 'series___meta___desc___desc'
  | 'series___meta___spaceId'
  | 'series___meta___contentful_id'
  | 'series___meta___createdAt'
  | 'series___meta___updatedAt'
  | 'series___meta___sys___revision'
  | 'series___meta___node_locale'
  | 'series___meta___post'
  | 'series___meta___post___id'
  | 'series___meta___post___children'
  | 'series___meta___post___title'
  | 'series___meta___post___spaceId'
  | 'series___meta___post___contentful_id'
  | 'series___meta___post___createdAt'
  | 'series___meta___post___updatedAt'
  | 'series___meta___post___node_locale'
  | 'series___meta___page'
  | 'series___meta___page___id'
  | 'series___meta___page___children'
  | 'series___meta___page___title'
  | 'series___meta___page___isTopLevel'
  | 'series___meta___page___index'
  | 'series___meta___page___spaceId'
  | 'series___meta___page___contentful_id'
  | 'series___meta___page___createdAt'
  | 'series___meta___page___updatedAt'
  | 'series___meta___page___node_locale'
  | 'series___meta___childContentfulMetaDescTextNode___id'
  | 'series___meta___childContentfulMetaDescTextNode___children'
  | 'series___meta___childContentfulMetaDescTextNode___desc'
  | 'series___post'
  | 'series___post___id'
  | 'series___post___parent___id'
  | 'series___post___parent___children'
  | 'series___post___children'
  | 'series___post___children___id'
  | 'series___post___children___children'
  | 'series___post___internal___content'
  | 'series___post___internal___contentDigest'
  | 'series___post___internal___description'
  | 'series___post___internal___fieldOwners'
  | 'series___post___internal___ignoreType'
  | 'series___post___internal___mediaType'
  | 'series___post___internal___owner'
  | 'series___post___internal___type'
  | 'series___post___title'
  | 'series___post___meta___id'
  | 'series___post___meta___children'
  | 'series___post___meta___slug'
  | 'series___post___meta___entryDate'
  | 'series___post___meta___tags'
  | 'series___post___meta___post___series'
  | 'series___post___meta___spaceId'
  | 'series___post___meta___contentful_id'
  | 'series___post___meta___createdAt'
  | 'series___post___meta___updatedAt'
  | 'series___post___meta___node_locale'
  | 'series___post___meta___post'
  | 'series___post___meta___page'
  | 'series___post___series___id'
  | 'series___post___series___children'
  | 'series___post___series___title'
  | 'series___post___series___post'
  | 'series___post___series___spaceId'
  | 'series___post___series___contentful_id'
  | 'series___post___series___createdAt'
  | 'series___post___series___updatedAt'
  | 'series___post___series___node_locale'
  | 'series___post___body___id'
  | 'series___post___body___children'
  | 'series___post___body___body'
  | 'series___post___spaceId'
  | 'series___post___contentful_id'
  | 'series___post___createdAt'
  | 'series___post___updatedAt'
  | 'series___post___sys___revision'
  | 'series___post___node_locale'
  | 'series___post___childContentfulPostBodyTextNode___id'
  | 'series___post___childContentfulPostBodyTextNode___children'
  | 'series___post___childContentfulPostBodyTextNode___body'
  | 'series___spaceId'
  | 'series___contentful_id'
  | 'series___createdAt'
  | 'series___updatedAt'
  | 'series___sys___revision'
  | 'series___node_locale'
  | 'body___id'
  | 'body___parent___id'
  | 'body___parent___parent___id'
  | 'body___parent___parent___children'
  | 'body___parent___children'
  | 'body___parent___children___id'
  | 'body___parent___children___children'
  | 'body___parent___internal___content'
  | 'body___parent___internal___contentDigest'
  | 'body___parent___internal___description'
  | 'body___parent___internal___fieldOwners'
  | 'body___parent___internal___ignoreType'
  | 'body___parent___internal___mediaType'
  | 'body___parent___internal___owner'
  | 'body___parent___internal___type'
  | 'body___children'
  | 'body___children___id'
  | 'body___children___parent___id'
  | 'body___children___parent___children'
  | 'body___children___children'
  | 'body___children___children___id'
  | 'body___children___children___children'
  | 'body___children___internal___content'
  | 'body___children___internal___contentDigest'
  | 'body___children___internal___description'
  | 'body___children___internal___fieldOwners'
  | 'body___children___internal___ignoreType'
  | 'body___children___internal___mediaType'
  | 'body___children___internal___owner'
  | 'body___children___internal___type'
  | 'body___internal___content'
  | 'body___internal___contentDigest'
  | 'body___internal___description'
  | 'body___internal___fieldOwners'
  | 'body___internal___ignoreType'
  | 'body___internal___mediaType'
  | 'body___internal___owner'
  | 'body___internal___type'
  | 'body___body'
  | 'body___childMarkdownRemark___id'
  | 'body___childMarkdownRemark___frontmatter___title'
  | 'body___childMarkdownRemark___excerpt'
  | 'body___childMarkdownRemark___rawMarkdownBody'
  | 'body___childMarkdownRemark___html'
  | 'body___childMarkdownRemark___htmlAst'
  | 'body___childMarkdownRemark___excerptAst'
  | 'body___childMarkdownRemark___headings'
  | 'body___childMarkdownRemark___headings___id'
  | 'body___childMarkdownRemark___headings___value'
  | 'body___childMarkdownRemark___headings___depth'
  | 'body___childMarkdownRemark___timeToRead'
  | 'body___childMarkdownRemark___tableOfContents'
  | 'body___childMarkdownRemark___wordCount___paragraphs'
  | 'body___childMarkdownRemark___wordCount___sentences'
  | 'body___childMarkdownRemark___wordCount___words'
  | 'body___childMarkdownRemark___parent___id'
  | 'body___childMarkdownRemark___parent___children'
  | 'body___childMarkdownRemark___children'
  | 'body___childMarkdownRemark___children___id'
  | 'body___childMarkdownRemark___children___children'
  | 'body___childMarkdownRemark___internal___content'
  | 'body___childMarkdownRemark___internal___contentDigest'
  | 'body___childMarkdownRemark___internal___description'
  | 'body___childMarkdownRemark___internal___fieldOwners'
  | 'body___childMarkdownRemark___internal___ignoreType'
  | 'body___childMarkdownRemark___internal___mediaType'
  | 'body___childMarkdownRemark___internal___owner'
  | 'body___childMarkdownRemark___internal___type'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'childContentfulPostBodyTextNode___id'
  | 'childContentfulPostBodyTextNode___parent___id'
  | 'childContentfulPostBodyTextNode___parent___parent___id'
  | 'childContentfulPostBodyTextNode___parent___parent___children'
  | 'childContentfulPostBodyTextNode___parent___children'
  | 'childContentfulPostBodyTextNode___parent___children___id'
  | 'childContentfulPostBodyTextNode___parent___children___children'
  | 'childContentfulPostBodyTextNode___parent___internal___content'
  | 'childContentfulPostBodyTextNode___parent___internal___contentDigest'
  | 'childContentfulPostBodyTextNode___parent___internal___description'
  | 'childContentfulPostBodyTextNode___parent___internal___fieldOwners'
  | 'childContentfulPostBodyTextNode___parent___internal___ignoreType'
  | 'childContentfulPostBodyTextNode___parent___internal___mediaType'
  | 'childContentfulPostBodyTextNode___parent___internal___owner'
  | 'childContentfulPostBodyTextNode___parent___internal___type'
  | 'childContentfulPostBodyTextNode___children'
  | 'childContentfulPostBodyTextNode___children___id'
  | 'childContentfulPostBodyTextNode___children___parent___id'
  | 'childContentfulPostBodyTextNode___children___parent___children'
  | 'childContentfulPostBodyTextNode___children___children'
  | 'childContentfulPostBodyTextNode___children___children___id'
  | 'childContentfulPostBodyTextNode___children___children___children'
  | 'childContentfulPostBodyTextNode___children___internal___content'
  | 'childContentfulPostBodyTextNode___children___internal___contentDigest'
  | 'childContentfulPostBodyTextNode___children___internal___description'
  | 'childContentfulPostBodyTextNode___children___internal___fieldOwners'
  | 'childContentfulPostBodyTextNode___children___internal___ignoreType'
  | 'childContentfulPostBodyTextNode___children___internal___mediaType'
  | 'childContentfulPostBodyTextNode___children___internal___owner'
  | 'childContentfulPostBodyTextNode___children___internal___type'
  | 'childContentfulPostBodyTextNode___internal___content'
  | 'childContentfulPostBodyTextNode___internal___contentDigest'
  | 'childContentfulPostBodyTextNode___internal___description'
  | 'childContentfulPostBodyTextNode___internal___fieldOwners'
  | 'childContentfulPostBodyTextNode___internal___ignoreType'
  | 'childContentfulPostBodyTextNode___internal___mediaType'
  | 'childContentfulPostBodyTextNode___internal___owner'
  | 'childContentfulPostBodyTextNode___internal___type'
  | 'childContentfulPostBodyTextNode___body'
  | 'childContentfulPostBodyTextNode___childMarkdownRemark___id'
  | 'childContentfulPostBodyTextNode___childMarkdownRemark___frontmatter___title'
  | 'childContentfulPostBodyTextNode___childMarkdownRemark___excerpt'
  | 'childContentfulPostBodyTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'childContentfulPostBodyTextNode___childMarkdownRemark___html'
  | 'childContentfulPostBodyTextNode___childMarkdownRemark___htmlAst'
  | 'childContentfulPostBodyTextNode___childMarkdownRemark___excerptAst'
  | 'childContentfulPostBodyTextNode___childMarkdownRemark___headings'
  | 'childContentfulPostBodyTextNode___childMarkdownRemark___headings___id'
  | 'childContentfulPostBodyTextNode___childMarkdownRemark___headings___value'
  | 'childContentfulPostBodyTextNode___childMarkdownRemark___headings___depth'
  | 'childContentfulPostBodyTextNode___childMarkdownRemark___timeToRead'
  | 'childContentfulPostBodyTextNode___childMarkdownRemark___tableOfContents'
  | 'childContentfulPostBodyTextNode___childMarkdownRemark___wordCount___paragraphs'
  | 'childContentfulPostBodyTextNode___childMarkdownRemark___wordCount___sentences'
  | 'childContentfulPostBodyTextNode___childMarkdownRemark___wordCount___words'
  | 'childContentfulPostBodyTextNode___childMarkdownRemark___parent___id'
  | 'childContentfulPostBodyTextNode___childMarkdownRemark___parent___children'
  | 'childContentfulPostBodyTextNode___childMarkdownRemark___children'
  | 'childContentfulPostBodyTextNode___childMarkdownRemark___children___id'
  | 'childContentfulPostBodyTextNode___childMarkdownRemark___children___children'
  | 'childContentfulPostBodyTextNode___childMarkdownRemark___internal___content'
  | 'childContentfulPostBodyTextNode___childMarkdownRemark___internal___contentDigest'
  | 'childContentfulPostBodyTextNode___childMarkdownRemark___internal___description'
  | 'childContentfulPostBodyTextNode___childMarkdownRemark___internal___fieldOwners'
  | 'childContentfulPostBodyTextNode___childMarkdownRemark___internal___ignoreType'
  | 'childContentfulPostBodyTextNode___childMarkdownRemark___internal___mediaType'
  | 'childContentfulPostBodyTextNode___childMarkdownRemark___internal___owner'
  | 'childContentfulPostBodyTextNode___childMarkdownRemark___internal___type';

export type ContentfulPostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  meta?: Maybe<ContentfulMetaFilterInput>;
  series?: Maybe<ContentfulPostSeriesFilterInput>;
  body?: Maybe<ContentfulPostBodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPostSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulPostBodyTextNode?: Maybe<ContentfulPostBodyTextNodeFilterInput>;
};

export type ContentfulPostFilterListInput = {
  elemMatch?: Maybe<ContentfulPostFilterInput>;
};

export type ContentfulPostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPostEdge>;
  nodes: Array<ContentfulPost>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPostSeries = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  meta?: Maybe<ContentfulMeta>;
  post?: Maybe<Array<Maybe<ContentfulPost>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulPostSeriesSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulPostSeriesCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPostSeriesUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulPostSeriesConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPostSeriesEdge>;
  nodes: Array<ContentfulPostSeries>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPostSeriesGroupConnection>;
};


export type ContentfulPostSeriesConnectionDistinctArgs = {
  field: ContentfulPostSeriesFieldsEnum;
};


export type ContentfulPostSeriesConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPostSeriesFieldsEnum;
};

export type ContentfulPostSeriesEdge = {
  next?: Maybe<ContentfulPostSeries>;
  node: ContentfulPostSeries;
  previous?: Maybe<ContentfulPostSeries>;
};

export type ContentfulPostSeriesFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'meta___id'
  | 'meta___parent___id'
  | 'meta___parent___parent___id'
  | 'meta___parent___parent___children'
  | 'meta___parent___children'
  | 'meta___parent___children___id'
  | 'meta___parent___children___children'
  | 'meta___parent___internal___content'
  | 'meta___parent___internal___contentDigest'
  | 'meta___parent___internal___description'
  | 'meta___parent___internal___fieldOwners'
  | 'meta___parent___internal___ignoreType'
  | 'meta___parent___internal___mediaType'
  | 'meta___parent___internal___owner'
  | 'meta___parent___internal___type'
  | 'meta___children'
  | 'meta___children___id'
  | 'meta___children___parent___id'
  | 'meta___children___parent___children'
  | 'meta___children___children'
  | 'meta___children___children___id'
  | 'meta___children___children___children'
  | 'meta___children___internal___content'
  | 'meta___children___internal___contentDigest'
  | 'meta___children___internal___description'
  | 'meta___children___internal___fieldOwners'
  | 'meta___children___internal___ignoreType'
  | 'meta___children___internal___mediaType'
  | 'meta___children___internal___owner'
  | 'meta___children___internal___type'
  | 'meta___internal___content'
  | 'meta___internal___contentDigest'
  | 'meta___internal___description'
  | 'meta___internal___fieldOwners'
  | 'meta___internal___ignoreType'
  | 'meta___internal___mediaType'
  | 'meta___internal___owner'
  | 'meta___internal___type'
  | 'meta___slug'
  | 'meta___entryDate'
  | 'meta___tags'
  | 'meta___post___series'
  | 'meta___post___series___id'
  | 'meta___post___series___parent___id'
  | 'meta___post___series___parent___children'
  | 'meta___post___series___children'
  | 'meta___post___series___children___id'
  | 'meta___post___series___children___children'
  | 'meta___post___series___internal___content'
  | 'meta___post___series___internal___contentDigest'
  | 'meta___post___series___internal___description'
  | 'meta___post___series___internal___fieldOwners'
  | 'meta___post___series___internal___ignoreType'
  | 'meta___post___series___internal___mediaType'
  | 'meta___post___series___internal___owner'
  | 'meta___post___series___internal___type'
  | 'meta___post___series___title'
  | 'meta___post___series___meta___id'
  | 'meta___post___series___meta___children'
  | 'meta___post___series___meta___slug'
  | 'meta___post___series___meta___entryDate'
  | 'meta___post___series___meta___tags'
  | 'meta___post___series___meta___post___series'
  | 'meta___post___series___meta___spaceId'
  | 'meta___post___series___meta___contentful_id'
  | 'meta___post___series___meta___createdAt'
  | 'meta___post___series___meta___updatedAt'
  | 'meta___post___series___meta___node_locale'
  | 'meta___post___series___meta___post'
  | 'meta___post___series___meta___page'
  | 'meta___post___series___post'
  | 'meta___post___series___post___id'
  | 'meta___post___series___post___children'
  | 'meta___post___series___post___title'
  | 'meta___post___series___post___spaceId'
  | 'meta___post___series___post___contentful_id'
  | 'meta___post___series___post___createdAt'
  | 'meta___post___series___post___updatedAt'
  | 'meta___post___series___post___node_locale'
  | 'meta___post___series___spaceId'
  | 'meta___post___series___contentful_id'
  | 'meta___post___series___createdAt'
  | 'meta___post___series___updatedAt'
  | 'meta___post___series___sys___revision'
  | 'meta___post___series___node_locale'
  | 'meta___desc___id'
  | 'meta___desc___parent___id'
  | 'meta___desc___parent___children'
  | 'meta___desc___children'
  | 'meta___desc___children___id'
  | 'meta___desc___children___children'
  | 'meta___desc___internal___content'
  | 'meta___desc___internal___contentDigest'
  | 'meta___desc___internal___description'
  | 'meta___desc___internal___fieldOwners'
  | 'meta___desc___internal___ignoreType'
  | 'meta___desc___internal___mediaType'
  | 'meta___desc___internal___owner'
  | 'meta___desc___internal___type'
  | 'meta___desc___desc'
  | 'meta___desc___childMarkdownRemark___id'
  | 'meta___desc___childMarkdownRemark___excerpt'
  | 'meta___desc___childMarkdownRemark___rawMarkdownBody'
  | 'meta___desc___childMarkdownRemark___html'
  | 'meta___desc___childMarkdownRemark___htmlAst'
  | 'meta___desc___childMarkdownRemark___excerptAst'
  | 'meta___desc___childMarkdownRemark___headings'
  | 'meta___desc___childMarkdownRemark___timeToRead'
  | 'meta___desc___childMarkdownRemark___tableOfContents'
  | 'meta___desc___childMarkdownRemark___children'
  | 'meta___spaceId'
  | 'meta___contentful_id'
  | 'meta___createdAt'
  | 'meta___updatedAt'
  | 'meta___sys___revision'
  | 'meta___node_locale'
  | 'meta___post'
  | 'meta___post___id'
  | 'meta___post___parent___id'
  | 'meta___post___parent___children'
  | 'meta___post___children'
  | 'meta___post___children___id'
  | 'meta___post___children___children'
  | 'meta___post___internal___content'
  | 'meta___post___internal___contentDigest'
  | 'meta___post___internal___description'
  | 'meta___post___internal___fieldOwners'
  | 'meta___post___internal___ignoreType'
  | 'meta___post___internal___mediaType'
  | 'meta___post___internal___owner'
  | 'meta___post___internal___type'
  | 'meta___post___title'
  | 'meta___post___meta___id'
  | 'meta___post___meta___children'
  | 'meta___post___meta___slug'
  | 'meta___post___meta___entryDate'
  | 'meta___post___meta___tags'
  | 'meta___post___meta___post___series'
  | 'meta___post___meta___spaceId'
  | 'meta___post___meta___contentful_id'
  | 'meta___post___meta___createdAt'
  | 'meta___post___meta___updatedAt'
  | 'meta___post___meta___node_locale'
  | 'meta___post___meta___post'
  | 'meta___post___meta___page'
  | 'meta___post___body___id'
  | 'meta___post___body___children'
  | 'meta___post___body___body'
  | 'meta___post___spaceId'
  | 'meta___post___contentful_id'
  | 'meta___post___createdAt'
  | 'meta___post___updatedAt'
  | 'meta___post___sys___revision'
  | 'meta___post___node_locale'
  | 'meta___post___childContentfulPostBodyTextNode___id'
  | 'meta___post___childContentfulPostBodyTextNode___children'
  | 'meta___post___childContentfulPostBodyTextNode___body'
  | 'meta___page'
  | 'meta___page___id'
  | 'meta___page___parent___id'
  | 'meta___page___parent___children'
  | 'meta___page___children'
  | 'meta___page___children___id'
  | 'meta___page___children___children'
  | 'meta___page___internal___content'
  | 'meta___page___internal___contentDigest'
  | 'meta___page___internal___description'
  | 'meta___page___internal___fieldOwners'
  | 'meta___page___internal___ignoreType'
  | 'meta___page___internal___mediaType'
  | 'meta___page___internal___owner'
  | 'meta___page___internal___type'
  | 'meta___page___title'
  | 'meta___page___isTopLevel'
  | 'meta___page___index'
  | 'meta___page___spaceId'
  | 'meta___page___contentful_id'
  | 'meta___page___createdAt'
  | 'meta___page___updatedAt'
  | 'meta___page___sys___revision'
  | 'meta___page___node_locale'
  | 'meta___childContentfulMetaDescTextNode___id'
  | 'meta___childContentfulMetaDescTextNode___parent___id'
  | 'meta___childContentfulMetaDescTextNode___parent___children'
  | 'meta___childContentfulMetaDescTextNode___children'
  | 'meta___childContentfulMetaDescTextNode___children___id'
  | 'meta___childContentfulMetaDescTextNode___children___children'
  | 'meta___childContentfulMetaDescTextNode___internal___content'
  | 'meta___childContentfulMetaDescTextNode___internal___contentDigest'
  | 'meta___childContentfulMetaDescTextNode___internal___description'
  | 'meta___childContentfulMetaDescTextNode___internal___fieldOwners'
  | 'meta___childContentfulMetaDescTextNode___internal___ignoreType'
  | 'meta___childContentfulMetaDescTextNode___internal___mediaType'
  | 'meta___childContentfulMetaDescTextNode___internal___owner'
  | 'meta___childContentfulMetaDescTextNode___internal___type'
  | 'meta___childContentfulMetaDescTextNode___desc'
  | 'meta___childContentfulMetaDescTextNode___childMarkdownRemark___id'
  | 'meta___childContentfulMetaDescTextNode___childMarkdownRemark___excerpt'
  | 'meta___childContentfulMetaDescTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'meta___childContentfulMetaDescTextNode___childMarkdownRemark___html'
  | 'meta___childContentfulMetaDescTextNode___childMarkdownRemark___htmlAst'
  | 'meta___childContentfulMetaDescTextNode___childMarkdownRemark___excerptAst'
  | 'meta___childContentfulMetaDescTextNode___childMarkdownRemark___headings'
  | 'meta___childContentfulMetaDescTextNode___childMarkdownRemark___timeToRead'
  | 'meta___childContentfulMetaDescTextNode___childMarkdownRemark___tableOfContents'
  | 'meta___childContentfulMetaDescTextNode___childMarkdownRemark___children'
  | 'post'
  | 'post___id'
  | 'post___parent___id'
  | 'post___parent___parent___id'
  | 'post___parent___parent___children'
  | 'post___parent___children'
  | 'post___parent___children___id'
  | 'post___parent___children___children'
  | 'post___parent___internal___content'
  | 'post___parent___internal___contentDigest'
  | 'post___parent___internal___description'
  | 'post___parent___internal___fieldOwners'
  | 'post___parent___internal___ignoreType'
  | 'post___parent___internal___mediaType'
  | 'post___parent___internal___owner'
  | 'post___parent___internal___type'
  | 'post___children'
  | 'post___children___id'
  | 'post___children___parent___id'
  | 'post___children___parent___children'
  | 'post___children___children'
  | 'post___children___children___id'
  | 'post___children___children___children'
  | 'post___children___internal___content'
  | 'post___children___internal___contentDigest'
  | 'post___children___internal___description'
  | 'post___children___internal___fieldOwners'
  | 'post___children___internal___ignoreType'
  | 'post___children___internal___mediaType'
  | 'post___children___internal___owner'
  | 'post___children___internal___type'
  | 'post___internal___content'
  | 'post___internal___contentDigest'
  | 'post___internal___description'
  | 'post___internal___fieldOwners'
  | 'post___internal___ignoreType'
  | 'post___internal___mediaType'
  | 'post___internal___owner'
  | 'post___internal___type'
  | 'post___title'
  | 'post___meta___id'
  | 'post___meta___parent___id'
  | 'post___meta___parent___children'
  | 'post___meta___children'
  | 'post___meta___children___id'
  | 'post___meta___children___children'
  | 'post___meta___internal___content'
  | 'post___meta___internal___contentDigest'
  | 'post___meta___internal___description'
  | 'post___meta___internal___fieldOwners'
  | 'post___meta___internal___ignoreType'
  | 'post___meta___internal___mediaType'
  | 'post___meta___internal___owner'
  | 'post___meta___internal___type'
  | 'post___meta___slug'
  | 'post___meta___entryDate'
  | 'post___meta___tags'
  | 'post___meta___post___series'
  | 'post___meta___post___series___id'
  | 'post___meta___post___series___children'
  | 'post___meta___post___series___title'
  | 'post___meta___post___series___post'
  | 'post___meta___post___series___spaceId'
  | 'post___meta___post___series___contentful_id'
  | 'post___meta___post___series___createdAt'
  | 'post___meta___post___series___updatedAt'
  | 'post___meta___post___series___node_locale'
  | 'post___meta___desc___id'
  | 'post___meta___desc___children'
  | 'post___meta___desc___desc'
  | 'post___meta___spaceId'
  | 'post___meta___contentful_id'
  | 'post___meta___createdAt'
  | 'post___meta___updatedAt'
  | 'post___meta___sys___revision'
  | 'post___meta___node_locale'
  | 'post___meta___post'
  | 'post___meta___post___id'
  | 'post___meta___post___children'
  | 'post___meta___post___title'
  | 'post___meta___post___spaceId'
  | 'post___meta___post___contentful_id'
  | 'post___meta___post___createdAt'
  | 'post___meta___post___updatedAt'
  | 'post___meta___post___node_locale'
  | 'post___meta___page'
  | 'post___meta___page___id'
  | 'post___meta___page___children'
  | 'post___meta___page___title'
  | 'post___meta___page___isTopLevel'
  | 'post___meta___page___index'
  | 'post___meta___page___spaceId'
  | 'post___meta___page___contentful_id'
  | 'post___meta___page___createdAt'
  | 'post___meta___page___updatedAt'
  | 'post___meta___page___node_locale'
  | 'post___meta___childContentfulMetaDescTextNode___id'
  | 'post___meta___childContentfulMetaDescTextNode___children'
  | 'post___meta___childContentfulMetaDescTextNode___desc'
  | 'post___series___id'
  | 'post___series___parent___id'
  | 'post___series___parent___children'
  | 'post___series___children'
  | 'post___series___children___id'
  | 'post___series___children___children'
  | 'post___series___internal___content'
  | 'post___series___internal___contentDigest'
  | 'post___series___internal___description'
  | 'post___series___internal___fieldOwners'
  | 'post___series___internal___ignoreType'
  | 'post___series___internal___mediaType'
  | 'post___series___internal___owner'
  | 'post___series___internal___type'
  | 'post___series___title'
  | 'post___series___meta___id'
  | 'post___series___meta___children'
  | 'post___series___meta___slug'
  | 'post___series___meta___entryDate'
  | 'post___series___meta___tags'
  | 'post___series___meta___post___series'
  | 'post___series___meta___spaceId'
  | 'post___series___meta___contentful_id'
  | 'post___series___meta___createdAt'
  | 'post___series___meta___updatedAt'
  | 'post___series___meta___node_locale'
  | 'post___series___meta___post'
  | 'post___series___meta___page'
  | 'post___series___post'
  | 'post___series___post___id'
  | 'post___series___post___children'
  | 'post___series___post___title'
  | 'post___series___post___spaceId'
  | 'post___series___post___contentful_id'
  | 'post___series___post___createdAt'
  | 'post___series___post___updatedAt'
  | 'post___series___post___node_locale'
  | 'post___series___spaceId'
  | 'post___series___contentful_id'
  | 'post___series___createdAt'
  | 'post___series___updatedAt'
  | 'post___series___sys___revision'
  | 'post___series___node_locale'
  | 'post___body___id'
  | 'post___body___parent___id'
  | 'post___body___parent___children'
  | 'post___body___children'
  | 'post___body___children___id'
  | 'post___body___children___children'
  | 'post___body___internal___content'
  | 'post___body___internal___contentDigest'
  | 'post___body___internal___description'
  | 'post___body___internal___fieldOwners'
  | 'post___body___internal___ignoreType'
  | 'post___body___internal___mediaType'
  | 'post___body___internal___owner'
  | 'post___body___internal___type'
  | 'post___body___body'
  | 'post___body___childMarkdownRemark___id'
  | 'post___body___childMarkdownRemark___excerpt'
  | 'post___body___childMarkdownRemark___rawMarkdownBody'
  | 'post___body___childMarkdownRemark___html'
  | 'post___body___childMarkdownRemark___htmlAst'
  | 'post___body___childMarkdownRemark___excerptAst'
  | 'post___body___childMarkdownRemark___headings'
  | 'post___body___childMarkdownRemark___timeToRead'
  | 'post___body___childMarkdownRemark___tableOfContents'
  | 'post___body___childMarkdownRemark___children'
  | 'post___spaceId'
  | 'post___contentful_id'
  | 'post___createdAt'
  | 'post___updatedAt'
  | 'post___sys___revision'
  | 'post___node_locale'
  | 'post___childContentfulPostBodyTextNode___id'
  | 'post___childContentfulPostBodyTextNode___parent___id'
  | 'post___childContentfulPostBodyTextNode___parent___children'
  | 'post___childContentfulPostBodyTextNode___children'
  | 'post___childContentfulPostBodyTextNode___children___id'
  | 'post___childContentfulPostBodyTextNode___children___children'
  | 'post___childContentfulPostBodyTextNode___internal___content'
  | 'post___childContentfulPostBodyTextNode___internal___contentDigest'
  | 'post___childContentfulPostBodyTextNode___internal___description'
  | 'post___childContentfulPostBodyTextNode___internal___fieldOwners'
  | 'post___childContentfulPostBodyTextNode___internal___ignoreType'
  | 'post___childContentfulPostBodyTextNode___internal___mediaType'
  | 'post___childContentfulPostBodyTextNode___internal___owner'
  | 'post___childContentfulPostBodyTextNode___internal___type'
  | 'post___childContentfulPostBodyTextNode___body'
  | 'post___childContentfulPostBodyTextNode___childMarkdownRemark___id'
  | 'post___childContentfulPostBodyTextNode___childMarkdownRemark___excerpt'
  | 'post___childContentfulPostBodyTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'post___childContentfulPostBodyTextNode___childMarkdownRemark___html'
  | 'post___childContentfulPostBodyTextNode___childMarkdownRemark___htmlAst'
  | 'post___childContentfulPostBodyTextNode___childMarkdownRemark___excerptAst'
  | 'post___childContentfulPostBodyTextNode___childMarkdownRemark___headings'
  | 'post___childContentfulPostBodyTextNode___childMarkdownRemark___timeToRead'
  | 'post___childContentfulPostBodyTextNode___childMarkdownRemark___tableOfContents'
  | 'post___childContentfulPostBodyTextNode___childMarkdownRemark___children'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale';

export type ContentfulPostSeriesFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  meta?: Maybe<ContentfulMetaFilterInput>;
  post?: Maybe<ContentfulPostFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPostSeriesSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPostSeriesFilterListInput = {
  elemMatch?: Maybe<ContentfulPostSeriesFilterInput>;
};

export type ContentfulPostSeriesGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPostSeriesEdge>;
  nodes: Array<ContentfulPostSeries>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPostSeriesSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPostSeriesFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPostSeriesSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulPostSeriesSysContentType>;
};

export type ContentfulPostSeriesSysContentType = {
  sys?: Maybe<ContentfulPostSeriesSysContentTypeSys>;
};

export type ContentfulPostSeriesSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPostSeriesSysContentTypeSysFilterInput>;
};

export type ContentfulPostSeriesSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulPostSeriesSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPostSeriesSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulPostSeriesSysContentTypeFilterInput>;
};

export type ContentfulPostSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPostSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulPostSysContentType>;
};

export type ContentfulPostSysContentType = {
  sys?: Maybe<ContentfulPostSysContentTypeSys>;
};

export type ContentfulPostSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPostSysContentTypeSysFilterInput>;
};

export type ContentfulPostSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulPostSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPostSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulPostSysContentTypeFilterInput>;
};

export type ContentfulResize = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSiteMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  baseUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  builtWith?: Maybe<Array<Maybe<Scalars['String']>>>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSiteMetadataSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulSiteMetadataCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulSiteMetadataUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulSiteMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSiteMetadataEdge>;
  nodes: Array<ContentfulSiteMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulSiteMetadataGroupConnection>;
};


export type ContentfulSiteMetadataConnectionDistinctArgs = {
  field: ContentfulSiteMetadataFieldsEnum;
};


export type ContentfulSiteMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulSiteMetadataFieldsEnum;
};

export type ContentfulSiteMetadataEdge = {
  next?: Maybe<ContentfulSiteMetadata>;
  node: ContentfulSiteMetadata;
  previous?: Maybe<ContentfulSiteMetadata>;
};

export type ContentfulSiteMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'baseUrl'
  | 'description'
  | 'builtWith'
  | 'page'
  | 'page___id'
  | 'page___parent___id'
  | 'page___parent___parent___id'
  | 'page___parent___parent___children'
  | 'page___parent___children'
  | 'page___parent___children___id'
  | 'page___parent___children___children'
  | 'page___parent___internal___content'
  | 'page___parent___internal___contentDigest'
  | 'page___parent___internal___description'
  | 'page___parent___internal___fieldOwners'
  | 'page___parent___internal___ignoreType'
  | 'page___parent___internal___mediaType'
  | 'page___parent___internal___owner'
  | 'page___parent___internal___type'
  | 'page___children'
  | 'page___children___id'
  | 'page___children___parent___id'
  | 'page___children___parent___children'
  | 'page___children___children'
  | 'page___children___children___id'
  | 'page___children___children___children'
  | 'page___children___internal___content'
  | 'page___children___internal___contentDigest'
  | 'page___children___internal___description'
  | 'page___children___internal___fieldOwners'
  | 'page___children___internal___ignoreType'
  | 'page___children___internal___mediaType'
  | 'page___children___internal___owner'
  | 'page___children___internal___type'
  | 'page___internal___content'
  | 'page___internal___contentDigest'
  | 'page___internal___description'
  | 'page___internal___fieldOwners'
  | 'page___internal___ignoreType'
  | 'page___internal___mediaType'
  | 'page___internal___owner'
  | 'page___internal___type'
  | 'page___title'
  | 'page___isTopLevel'
  | 'page___index'
  | 'page___spaceId'
  | 'page___contentful_id'
  | 'page___createdAt'
  | 'page___updatedAt'
  | 'page___sys___revision'
  | 'page___node_locale'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale';

export type ContentfulSiteMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  baseUrl?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  builtWith?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSiteMetadataSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSiteMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSiteMetadataEdge>;
  nodes: Array<ContentfulSiteMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulSiteMetadataSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSiteMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSiteMetadataSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulSiteMetadataSysContentType>;
};

export type ContentfulSiteMetadataSysContentType = {
  sys?: Maybe<ContentfulSiteMetadataSysContentTypeSys>;
};

export type ContentfulSiteMetadataSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulSiteMetadataSysContentTypeSysFilterInput>;
};

export type ContentfulSiteMetadataSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulSiteMetadataSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSiteMetadataSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulSiteMetadataSysContentTypeFilterInput>;
};

export type ContentfulSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageCropFocus = 
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type ImageFit = 
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ImageResizingBehavior = 
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'PAD'
  /** Crop a part of the original image to match the specified size. */
  | 'CROP'
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  | 'FILL'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'THUMB'
  /** Scale the image regardless of the original aspect ratio. */
  | 'SCALE';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum = 
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type MarkdownExcerptFormats = 
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

export type MarkdownHeading = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingLevels = 
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type MarkdownRemark = Node & {
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  fields?: Maybe<MarkdownRemarkFields>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFields = {
  readingTime?: Maybe<MarkdownRemarkFieldsReadingTime>;
};

export type MarkdownRemarkFieldsEnum = 
  | 'id'
  | 'frontmatter___title'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'fields___readingTime___text'
  | 'fields___readingTime___minutes'
  | 'fields___readingTime___time'
  | 'fields___readingTime___words'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings___id'
  | 'headings___value'
  | 'headings___depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MarkdownRemarkFieldsFilterInput = {
  readingTime?: Maybe<MarkdownRemarkFieldsReadingTimeFilterInput>;
};

export type MarkdownRemarkFieldsReadingTime = {
  text?: Maybe<Scalars['String']>;
  minutes?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['Float']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownRemarkFieldsReadingTimeFilterInput = {
  text?: Maybe<StringQueryOperatorInput>;
  minutes?: Maybe<FloatQueryOperatorInput>;
  time?: Maybe<FloatQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy = 
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulPage?: Maybe<ContentfulPage>;
  allContentfulPage: ContentfulPageConnection;
  contentfulPageSayHelloBodyTextNode?: Maybe<ContentfulPageSayHelloBodyTextNode>;
  allContentfulPageSayHelloBodyTextNode: ContentfulPageSayHelloBodyTextNodeConnection;
  contentfulPageSayHello?: Maybe<ContentfulPageSayHello>;
  allContentfulPageSayHello: ContentfulPageSayHelloConnection;
  contentfulPageAboutBodyTextNode?: Maybe<ContentfulPageAboutBodyTextNode>;
  allContentfulPageAboutBodyTextNode: ContentfulPageAboutBodyTextNodeConnection;
  contentfulPageAbout?: Maybe<ContentfulPageAbout>;
  allContentfulPageAbout: ContentfulPageAboutConnection;
  contentfulPageHome?: Maybe<ContentfulPageHome>;
  allContentfulPageHome: ContentfulPageHomeConnection;
  contentfulSiteMetadata?: Maybe<ContentfulSiteMetadata>;
  allContentfulSiteMetadata: ContentfulSiteMetadataConnection;
  contentfulPostBodyTextNode?: Maybe<ContentfulPostBodyTextNode>;
  allContentfulPostBodyTextNode: ContentfulPostBodyTextNodeConnection;
  contentfulPost?: Maybe<ContentfulPost>;
  allContentfulPost: ContentfulPostConnection;
  contentfulPostSeries?: Maybe<ContentfulPostSeries>;
  allContentfulPostSeries: ContentfulPostSeriesConnection;
  contentfulAuthorBlurbDescTextNode?: Maybe<ContentfulAuthorBlurbDescTextNode>;
  allContentfulAuthorBlurbDescTextNode: ContentfulAuthorBlurbDescTextNodeConnection;
  contentfulAuthor?: Maybe<ContentfulAuthor>;
  allContentfulAuthor: ContentfulAuthorConnection;
  contentfulAuthorSocialLinks?: Maybe<ContentfulAuthorSocialLinks>;
  allContentfulAuthorSocialLinks: ContentfulAuthorSocialLinksConnection;
  contentfulMetaDescTextNode?: Maybe<ContentfulMetaDescTextNode>;
  allContentfulMetaDescTextNode: ContentfulMetaDescTextNodeConnection;
  contentfulMeta?: Maybe<ContentfulMeta>;
  allContentfulMeta: ContentfulMetaConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  isTopLevel?: Maybe<BooleanQueryOperatorInput>;
  index?: Maybe<IntQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPageSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulPageArgs = {
  filter?: Maybe<ContentfulPageFilterInput>;
  sort?: Maybe<ContentfulPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPageSayHelloBodyTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulPageSayHelloBodyTextNodeArgs = {
  filter?: Maybe<ContentfulPageSayHelloBodyTextNodeFilterInput>;
  sort?: Maybe<ContentfulPageSayHelloBodyTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPageSayHelloArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  contactPerson?: Maybe<ContentfulAuthorFilterInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  body?: Maybe<ContentfulPageSayHelloBodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPageSayHelloSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulPageSayHelloBodyTextNode?: Maybe<ContentfulPageSayHelloBodyTextNodeFilterInput>;
};


export type QueryAllContentfulPageSayHelloArgs = {
  filter?: Maybe<ContentfulPageSayHelloFilterInput>;
  sort?: Maybe<ContentfulPageSayHelloSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPageAboutBodyTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulPageAboutBodyTextNodeArgs = {
  filter?: Maybe<ContentfulPageAboutBodyTextNodeFilterInput>;
  sort?: Maybe<ContentfulPageAboutBodyTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPageAboutArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  body?: Maybe<ContentfulPageAboutBodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPageAboutSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulPageAboutBodyTextNode?: Maybe<ContentfulPageAboutBodyTextNodeFilterInput>;
};


export type QueryAllContentfulPageAboutArgs = {
  filter?: Maybe<ContentfulPageAboutFilterInput>;
  sort?: Maybe<ContentfulPageAboutSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPageHomeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  subTitle?: Maybe<StringQueryOperatorInput>;
  authorBio?: Maybe<ContentfulAuthorFilterInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPageHomeSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulPageHomeArgs = {
  filter?: Maybe<ContentfulPageHomeFilterInput>;
  sort?: Maybe<ContentfulPageHomeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSiteMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  baseUrl?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  builtWith?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSiteMetadataSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulSiteMetadataArgs = {
  filter?: Maybe<ContentfulSiteMetadataFilterInput>;
  sort?: Maybe<ContentfulSiteMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPostBodyTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulPostBodyTextNodeArgs = {
  filter?: Maybe<ContentfulPostBodyTextNodeFilterInput>;
  sort?: Maybe<ContentfulPostBodyTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPostArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  meta?: Maybe<ContentfulMetaFilterInput>;
  series?: Maybe<ContentfulPostSeriesFilterInput>;
  body?: Maybe<ContentfulPostBodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPostSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulPostBodyTextNode?: Maybe<ContentfulPostBodyTextNodeFilterInput>;
};


export type QueryAllContentfulPostArgs = {
  filter?: Maybe<ContentfulPostFilterInput>;
  sort?: Maybe<ContentfulPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPostSeriesArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  meta?: Maybe<ContentfulMetaFilterInput>;
  post?: Maybe<ContentfulPostFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPostSeriesSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulPostSeriesArgs = {
  filter?: Maybe<ContentfulPostSeriesFilterInput>;
  sort?: Maybe<ContentfulPostSeriesSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAuthorBlurbDescTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  blurbDesc?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulAuthorBlurbDescTextNodeArgs = {
  filter?: Maybe<ContentfulAuthorBlurbDescTextNodeFilterInput>;
  sort?: Maybe<ContentfulAuthorBlurbDescTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAuthorArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  firstName?: Maybe<StringQueryOperatorInput>;
  lastName?: Maybe<StringQueryOperatorInput>;
  blurbTitle?: Maybe<StringQueryOperatorInput>;
  blurbLead?: Maybe<StringQueryOperatorInput>;
  profilePicture?: Maybe<ContentfulAssetFilterInput>;
  socialLinks?: Maybe<ContentfulAuthorSocialLinksFilterInput>;
  page___home?: Maybe<ContentfulPageHomeFilterListInput>;
  page___say_hello?: Maybe<ContentfulPageSayHelloFilterListInput>;
  blurbDesc?: Maybe<ContentfulAuthorBlurbDescTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAuthorSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulAuthorBlurbDescTextNode?: Maybe<ContentfulAuthorBlurbDescTextNodeFilterInput>;
};


export type QueryAllContentfulAuthorArgs = {
  filter?: Maybe<ContentfulAuthorFilterInput>;
  sort?: Maybe<ContentfulAuthorSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAuthorSocialLinksArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  nickname?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  linkedin?: Maybe<StringQueryOperatorInput>;
  instagram?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  github?: Maybe<StringQueryOperatorInput>;
  devTo?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<ContentfulAuthorFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAuthorSocialLinksSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulAuthorSocialLinksArgs = {
  filter?: Maybe<ContentfulAuthorSocialLinksFilterInput>;
  sort?: Maybe<ContentfulAuthorSocialLinksSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulMetaDescTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  desc?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulMetaDescTextNodeArgs = {
  filter?: Maybe<ContentfulMetaDescTextNodeFilterInput>;
  sort?: Maybe<ContentfulMetaDescTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulMetaArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  entryDate?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  post___series?: Maybe<ContentfulPostSeriesFilterListInput>;
  desc?: Maybe<ContentfulMetaDescTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulMetaSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  post?: Maybe<ContentfulPostFilterListInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  childContentfulMetaDescTextNode?: Maybe<ContentfulMetaDescTextNodeFilterInput>;
};


export type QueryAllContentfulMetaArgs = {
  filter?: Maybe<ContentfulMetaFilterInput>;
  sort?: Maybe<ContentfulMetaSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>;
  sort?: Maybe<ContentfulContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___author'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___plugins'
  | 'pluginCreator___pluginOptions___plugins___resolve'
  | 'pluginCreator___pluginOptions___plugins___id'
  | 'pluginCreator___pluginOptions___plugins___name'
  | 'pluginCreator___pluginOptions___plugins___version'
  | 'pluginCreator___pluginOptions___plugins___nodeAPIs'
  | 'pluginCreator___pluginOptions___plugins___pluginFilepath'
  | 'pluginCreator___pluginOptions___maxWidth'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___spaceId'
  | 'pluginCreator___pluginOptions___accessToken'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___plugins'
  | 'pluginOptions___plugins___resolve'
  | 'pluginOptions___plugins___id'
  | 'pluginOptions___plugins___name'
  | 'pluginOptions___plugins___version'
  | 'pluginOptions___plugins___pluginOptions___maxWidth'
  | 'pluginOptions___plugins___nodeAPIs'
  | 'pluginOptions___plugins___pluginFilepath'
  | 'pluginOptions___maxWidth'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___spaceId'
  | 'pluginOptions___accessToken'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
  maxWidth?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsPlugins = {
  resolve?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
  maxWidth?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  maxWidth?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type Unnamed_1_QueryVariables = {};


export type Unnamed_1_Query = { allContentfulPage: { edges: Array<{ node: (
        Pick<ContentfulPage, 'title'>
        & { meta?: Maybe<Pick<ContentfulMeta, 'slug'>> }
      ) }> }, allContentfulAuthorSocialLinks: { edges: Array<{ node: Pick<ContentfulAuthorSocialLinks, 'devTo' | 'github' | 'instagram' | 'linkedin' | 'twitter'> }> } };

export type Unnamed_2_QueryVariables = {};


export type Unnamed_2_Query = { contentfulSiteMetadata?: Maybe<Pick<ContentfulSiteMetadata, 'title' | 'description'>>, allContentfulPage: { edges: Array<{ node: (
        Pick<ContentfulPage, 'title'>
        & { meta?: Maybe<Pick<ContentfulMeta, 'slug'>> }
      ) }> } };

export type HomepageQueryVariables = {};


export type HomepageQuery = { allContentfulPage: { edges: Array<{ node: (
        Pick<ContentfulPage, 'title'>
        & { blocks?: Maybe<(
          Pick<ContentfulPageHome, 'title' | 'subTitle'>
          & { authorBio?: Maybe<(
            Pick<ContentfulAuthor, 'blurbTitle' | 'blurbLead'>
            & { blurbDesc?: Maybe<Pick<ContentfulAuthorBlurbDescTextNode, 'blurbDesc'>>, profilePicture?: Maybe<{ fluid?: Maybe<GatsbyContentfulFluid_TracedSvgFragment> }> }
          )> }
        )> }
      ) }> } };

export type GatsbyContentfulFixedFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_TracedSvgFragment = Pick<ContentfulFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_WithWebpFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFixed_WithWebp_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFluidFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_TracedSvgFragment = Pick<ContentfulFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebpFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebp_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulResolutionsFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_TracedSvgFragment = Pick<ContentfulResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_WithWebpFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulResolutions_WithWebp_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulSizesFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_TracedSvgFragment = Pick<ContentfulSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebpFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebp_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
