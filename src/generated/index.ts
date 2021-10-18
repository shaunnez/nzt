import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("https://api-ap-northeast-1.graphcms.com/v2/ckurs60y30er801z7hhc74mc1/master", {
    method: "POST",
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};

export type Activity = Node & {
  __typename?: 'Activity';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Activity>;
  /** List of Activity versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  mindsets: Array<Mindset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ActivityCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ActivityDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ActivityHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type ActivityMindsetsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<MindsetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MindsetWhereInput>;
};


export type ActivityPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ActivityUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ActivityConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: ActivityWhereUniqueInput;
};

/** A connection to a list of items. */
export type ActivityConnection = {
  __typename?: 'ActivityConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ActivityEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ActivityCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  mindsets?: Maybe<MindsetCreateManyInlineInput>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ActivityCreateManyInlineInput = {
  /** Connect multiple existing Activity documents */
  connect?: Maybe<Array<ActivityWhereUniqueInput>>;
  /** Create and connect multiple existing Activity documents */
  create?: Maybe<Array<ActivityCreateInput>>;
};

export type ActivityCreateOneInlineInput = {
  /** Connect one existing Activity document */
  connect?: Maybe<ActivityWhereUniqueInput>;
  /** Create and connect one Activity document */
  create?: Maybe<ActivityCreateInput>;
};

/** An edge in a connection. */
export type ActivityEdge = {
  __typename?: 'ActivityEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Activity;
};

/** Identifies documents */
export type ActivityManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ActivityWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ActivityWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ActivityWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  mindsets_every?: Maybe<MindsetWhereInput>;
  mindsets_none?: Maybe<MindsetWhereInput>;
  mindsets_some?: Maybe<MindsetWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum ActivityOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ActivityUpdateInput = {
  mindsets?: Maybe<MindsetUpdateManyInlineInput>;
  title?: Maybe<Scalars['String']>;
};

export type ActivityUpdateManyInlineInput = {
  /** Connect multiple existing Activity documents */
  connect?: Maybe<Array<ActivityConnectInput>>;
  /** Create and connect multiple Activity documents */
  create?: Maybe<Array<ActivityCreateInput>>;
  /** Delete multiple Activity documents */
  delete?: Maybe<Array<ActivityWhereUniqueInput>>;
  /** Disconnect multiple Activity documents */
  disconnect?: Maybe<Array<ActivityWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Activity documents */
  set?: Maybe<Array<ActivityWhereUniqueInput>>;
  /** Update multiple Activity documents */
  update?: Maybe<Array<ActivityUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Activity documents */
  upsert?: Maybe<Array<ActivityUpsertWithNestedWhereUniqueInput>>;
};

export type ActivityUpdateManyInput = {
  title?: Maybe<Scalars['String']>;
};

export type ActivityUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ActivityUpdateManyInput;
  /** Document search */
  where: ActivityWhereInput;
};

export type ActivityUpdateOneInlineInput = {
  /** Connect existing Activity document */
  connect?: Maybe<ActivityWhereUniqueInput>;
  /** Create and connect one Activity document */
  create?: Maybe<ActivityCreateInput>;
  /** Delete currently connected Activity document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Activity document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Activity document */
  update?: Maybe<ActivityUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Activity document */
  upsert?: Maybe<ActivityUpsertWithNestedWhereUniqueInput>;
};

export type ActivityUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ActivityUpdateInput;
  /** Unique document search */
  where: ActivityWhereUniqueInput;
};

export type ActivityUpsertInput = {
  /** Create document if it didn't exist */
  create: ActivityCreateInput;
  /** Update document if it exists */
  update: ActivityUpdateInput;
};

export type ActivityUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ActivityUpsertInput;
  /** Unique document search */
  where: ActivityWhereUniqueInput;
};

/** Identifies documents */
export type ActivityWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ActivityWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ActivityWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ActivityWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  mindsets_every?: Maybe<MindsetWhereInput>;
  mindsets_none?: Maybe<MindsetWhereInput>;
  mindsets_some?: Maybe<MindsetWhereInput>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References Activity record uniquely */
export type ActivityWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  backgroundImageBoxout: Array<Boxout>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  heroImageMindset: Array<Mindset>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  smallImageMindset: Array<Mindset>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetBackgroundImageBoxoutArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<BoxoutOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<BoxoutWhereInput>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHeroImageMindsetArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<MindsetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MindsetWhereInput>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetSmallImageMindsetArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<MindsetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MindsetWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  backgroundImageBoxout?: Maybe<BoxoutCreateManyInlineInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  heroImageMindset?: Maybe<MindsetCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  smallImageMindset?: Maybe<MindsetCreateManyInlineInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  backgroundImageBoxout_every?: Maybe<BoxoutWhereInput>;
  backgroundImageBoxout_none?: Maybe<BoxoutWhereInput>;
  backgroundImageBoxout_some?: Maybe<BoxoutWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  heroImageMindset_every?: Maybe<MindsetWhereInput>;
  heroImageMindset_none?: Maybe<MindsetWhereInput>;
  heroImageMindset_some?: Maybe<MindsetWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  smallImageMindset_every?: Maybe<MindsetWhereInput>;
  smallImageMindset_none?: Maybe<MindsetWhereInput>;
  smallImageMindset_some?: Maybe<MindsetWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: Maybe<DocumentTransformationInput>;
  image?: Maybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  backgroundImageBoxout?: Maybe<BoxoutUpdateManyInlineInput>;
  fileName?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  heroImageMindset?: Maybe<MindsetUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  smallImageMindset?: Maybe<MindsetUpdateManyInlineInput>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  backgroundImageBoxout_every?: Maybe<BoxoutWhereInput>;
  backgroundImageBoxout_none?: Maybe<BoxoutWhereInput>;
  backgroundImageBoxout_some?: Maybe<BoxoutWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  fileName?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  heroImageMindset_every?: Maybe<MindsetWhereInput>;
  heroImageMindset_none?: Maybe<MindsetWhereInput>;
  heroImageMindset_some?: Maybe<MindsetWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  size?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  smallImageMindset_every?: Maybe<MindsetWhereInput>;
  smallImageMindset_none?: Maybe<MindsetWhereInput>;
  smallImageMindset_some?: Maybe<MindsetWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
  width?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type Boxout = Node & {
  __typename?: 'Boxout';
  backgroundImage?: Maybe<Asset>;
  content?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Boxout>;
  /** List of Boxout versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  largeText?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type BoxoutBackgroundImageArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type BoxoutCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type BoxoutDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type BoxoutHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type BoxoutPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type BoxoutUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type BoxoutConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: BoxoutWhereUniqueInput;
};

/** A connection to a list of items. */
export type BoxoutConnection = {
  __typename?: 'BoxoutConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<BoxoutEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BoxoutCreateInput = {
  backgroundImage?: Maybe<AssetCreateOneInlineInput>;
  ckuwbnijr2b2801z19dkqac1l?: Maybe<WhoWhatWhereWhyHowCreateManyInlineInput>;
  ckuwboara2d8p01z11i4k1hz3?: Maybe<WhoWhatWhereWhyHowCreateManyInlineInput>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  largeText?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BoxoutCreateManyInlineInput = {
  /** Connect multiple existing Boxout documents */
  connect?: Maybe<Array<BoxoutWhereUniqueInput>>;
  /** Create and connect multiple existing Boxout documents */
  create?: Maybe<Array<BoxoutCreateInput>>;
};

export type BoxoutCreateOneInlineInput = {
  /** Connect one existing Boxout document */
  connect?: Maybe<BoxoutWhereUniqueInput>;
  /** Create and connect one Boxout document */
  create?: Maybe<BoxoutCreateInput>;
};

/** An edge in a connection. */
export type BoxoutEdge = {
  __typename?: 'BoxoutEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Boxout;
};

/** Identifies documents */
export type BoxoutManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BoxoutWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BoxoutWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BoxoutWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<AssetWhereInput>;
  content?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  content_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  content_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  content_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  content_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  content_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  content_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  content_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  content_starts_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  largeText?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  largeText_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  largeText_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  largeText_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  largeText_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  largeText_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  largeText_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  largeText_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  largeText_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  largeText_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum BoxoutOrderByInput {
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LargeTextAsc = 'largeText_ASC',
  LargeTextDesc = 'largeText_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type BoxoutUpdateInput = {
  backgroundImage?: Maybe<AssetUpdateOneInlineInput>;
  ckuwbnijr2b2801z19dkqac1l?: Maybe<WhoWhatWhereWhyHowUpdateManyInlineInput>;
  ckuwboara2d8p01z11i4k1hz3?: Maybe<WhoWhatWhereWhyHowUpdateManyInlineInput>;
  content?: Maybe<Scalars['String']>;
  largeText?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type BoxoutUpdateManyInlineInput = {
  /** Connect multiple existing Boxout documents */
  connect?: Maybe<Array<BoxoutConnectInput>>;
  /** Create and connect multiple Boxout documents */
  create?: Maybe<Array<BoxoutCreateInput>>;
  /** Delete multiple Boxout documents */
  delete?: Maybe<Array<BoxoutWhereUniqueInput>>;
  /** Disconnect multiple Boxout documents */
  disconnect?: Maybe<Array<BoxoutWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Boxout documents */
  set?: Maybe<Array<BoxoutWhereUniqueInput>>;
  /** Update multiple Boxout documents */
  update?: Maybe<Array<BoxoutUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Boxout documents */
  upsert?: Maybe<Array<BoxoutUpsertWithNestedWhereUniqueInput>>;
};

export type BoxoutUpdateManyInput = {
  content?: Maybe<Scalars['String']>;
  largeText?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type BoxoutUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: BoxoutUpdateManyInput;
  /** Document search */
  where: BoxoutWhereInput;
};

export type BoxoutUpdateOneInlineInput = {
  /** Connect existing Boxout document */
  connect?: Maybe<BoxoutWhereUniqueInput>;
  /** Create and connect one Boxout document */
  create?: Maybe<BoxoutCreateInput>;
  /** Delete currently connected Boxout document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Boxout document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Boxout document */
  update?: Maybe<BoxoutUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Boxout document */
  upsert?: Maybe<BoxoutUpsertWithNestedWhereUniqueInput>;
};

export type BoxoutUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: BoxoutUpdateInput;
  /** Unique document search */
  where: BoxoutWhereUniqueInput;
};

export type BoxoutUpsertInput = {
  /** Create document if it didn't exist */
  create: BoxoutCreateInput;
  /** Update document if it exists */
  update: BoxoutUpdateInput;
};

export type BoxoutUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: BoxoutUpsertInput;
  /** Unique document search */
  where: BoxoutWhereUniqueInput;
};

/** Identifies documents */
export type BoxoutWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BoxoutWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BoxoutWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BoxoutWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  backgroundImage?: Maybe<AssetWhereInput>;
  content?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  content_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  content_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  content_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  content_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  content_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  content_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  content_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  content_starts_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  largeText?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  largeText_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  largeText_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  largeText_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  largeText_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  largeText_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  largeText_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  largeText_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  largeText_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  largeText_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References Boxout record uniquely */
export type BoxoutWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ByTheNumber = Node & {
  __typename?: 'ByTheNumber';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ByTheNumber>;
  /** List of ByTheNumber versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  largeNumber?: Maybe<Scalars['Int']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ByTheNumberCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ByTheNumberDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ByTheNumberHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type ByTheNumberPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ByTheNumberUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ByTheNumberConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: ByTheNumberWhereUniqueInput;
};

/** A connection to a list of items. */
export type ByTheNumberConnection = {
  __typename?: 'ByTheNumberConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ByTheNumberEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ByTheNumberCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  largeNumber?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ByTheNumberCreateManyInlineInput = {
  /** Connect multiple existing ByTheNumber documents */
  connect?: Maybe<Array<ByTheNumberWhereUniqueInput>>;
  /** Create and connect multiple existing ByTheNumber documents */
  create?: Maybe<Array<ByTheNumberCreateInput>>;
};

export type ByTheNumberCreateOneInlineInput = {
  /** Connect one existing ByTheNumber document */
  connect?: Maybe<ByTheNumberWhereUniqueInput>;
  /** Create and connect one ByTheNumber document */
  create?: Maybe<ByTheNumberCreateInput>;
};

/** An edge in a connection. */
export type ByTheNumberEdge = {
  __typename?: 'ByTheNumberEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ByTheNumber;
};

/** Identifies documents */
export type ByTheNumberManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ByTheNumberWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ByTheNumberWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ByTheNumberWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  largeNumber?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  largeNumber_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  largeNumber_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  largeNumber_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  largeNumber_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  largeNumber_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  largeNumber_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  largeNumber_not_in?: Maybe<Array<Scalars['Int']>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum ByTheNumberOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LargeNumberAsc = 'largeNumber_ASC',
  LargeNumberDesc = 'largeNumber_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ByTheNumberUpdateInput = {
  description?: Maybe<Scalars['String']>;
  largeNumber?: Maybe<Scalars['Int']>;
};

export type ByTheNumberUpdateManyInlineInput = {
  /** Connect multiple existing ByTheNumber documents */
  connect?: Maybe<Array<ByTheNumberConnectInput>>;
  /** Create and connect multiple ByTheNumber documents */
  create?: Maybe<Array<ByTheNumberCreateInput>>;
  /** Delete multiple ByTheNumber documents */
  delete?: Maybe<Array<ByTheNumberWhereUniqueInput>>;
  /** Disconnect multiple ByTheNumber documents */
  disconnect?: Maybe<Array<ByTheNumberWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ByTheNumber documents */
  set?: Maybe<Array<ByTheNumberWhereUniqueInput>>;
  /** Update multiple ByTheNumber documents */
  update?: Maybe<Array<ByTheNumberUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ByTheNumber documents */
  upsert?: Maybe<Array<ByTheNumberUpsertWithNestedWhereUniqueInput>>;
};

export type ByTheNumberUpdateManyInput = {
  description?: Maybe<Scalars['String']>;
  largeNumber?: Maybe<Scalars['Int']>;
};

export type ByTheNumberUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ByTheNumberUpdateManyInput;
  /** Document search */
  where: ByTheNumberWhereInput;
};

export type ByTheNumberUpdateOneInlineInput = {
  /** Connect existing ByTheNumber document */
  connect?: Maybe<ByTheNumberWhereUniqueInput>;
  /** Create and connect one ByTheNumber document */
  create?: Maybe<ByTheNumberCreateInput>;
  /** Delete currently connected ByTheNumber document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected ByTheNumber document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single ByTheNumber document */
  update?: Maybe<ByTheNumberUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ByTheNumber document */
  upsert?: Maybe<ByTheNumberUpsertWithNestedWhereUniqueInput>;
};

export type ByTheNumberUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ByTheNumberUpdateInput;
  /** Unique document search */
  where: ByTheNumberWhereUniqueInput;
};

export type ByTheNumberUpsertInput = {
  /** Create document if it didn't exist */
  create: ByTheNumberCreateInput;
  /** Update document if it exists */
  update: ByTheNumberUpdateInput;
};

export type ByTheNumberUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ByTheNumberUpsertInput;
  /** Unique document search */
  where: ByTheNumberWhereUniqueInput;
};

/** Identifies documents */
export type ByTheNumberWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ByTheNumberWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ByTheNumberWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ByTheNumberWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  largeNumber?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  largeNumber_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  largeNumber_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  largeNumber_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  largeNumber_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  largeNumber_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  largeNumber_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  largeNumber_not_in?: Maybe<Array<Scalars['Int']>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References ByTheNumber record uniquely */
export type ByTheNumberWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>;
};

export type Continuum = Node & {
  __typename?: 'Continuum';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Continuum>;
  /** List of Continuum versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  leftText?: Maybe<Scalars['String']>;
  percentageLeft?: Maybe<Scalars['Int']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  rightText?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ContinuumCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ContinuumDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ContinuumHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type ContinuumPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type ContinuumUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ContinuumConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: ContinuumWhereUniqueInput;
};

/** A connection to a list of items. */
export type ContinuumConnection = {
  __typename?: 'ContinuumConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ContinuumEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ContinuumCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  leftText?: Maybe<Scalars['String']>;
  percentageLeft?: Maybe<Scalars['Int']>;
  rightText?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ContinuumCreateManyInlineInput = {
  /** Connect multiple existing Continuum documents */
  connect?: Maybe<Array<ContinuumWhereUniqueInput>>;
  /** Create and connect multiple existing Continuum documents */
  create?: Maybe<Array<ContinuumCreateInput>>;
};

export type ContinuumCreateOneInlineInput = {
  /** Connect one existing Continuum document */
  connect?: Maybe<ContinuumWhereUniqueInput>;
  /** Create and connect one Continuum document */
  create?: Maybe<ContinuumCreateInput>;
};

/** An edge in a connection. */
export type ContinuumEdge = {
  __typename?: 'ContinuumEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Continuum;
};

/** Identifies documents */
export type ContinuumManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ContinuumWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ContinuumWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ContinuumWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  leftText?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  leftText_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  leftText_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  leftText_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  leftText_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  leftText_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  leftText_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  leftText_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  leftText_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  leftText_starts_with?: Maybe<Scalars['String']>;
  percentageLeft?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  percentageLeft_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  percentageLeft_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  percentageLeft_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  percentageLeft_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  percentageLeft_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  percentageLeft_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  percentageLeft_not_in?: Maybe<Array<Scalars['Int']>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  rightText?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  rightText_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  rightText_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  rightText_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  rightText_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  rightText_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  rightText_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  rightText_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  rightText_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  rightText_starts_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum ContinuumOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LeftTextAsc = 'leftText_ASC',
  LeftTextDesc = 'leftText_DESC',
  PercentageLeftAsc = 'percentageLeft_ASC',
  PercentageLeftDesc = 'percentageLeft_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  RightTextAsc = 'rightText_ASC',
  RightTextDesc = 'rightText_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ContinuumUpdateInput = {
  leftText?: Maybe<Scalars['String']>;
  percentageLeft?: Maybe<Scalars['Int']>;
  rightText?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ContinuumUpdateManyInlineInput = {
  /** Connect multiple existing Continuum documents */
  connect?: Maybe<Array<ContinuumConnectInput>>;
  /** Create and connect multiple Continuum documents */
  create?: Maybe<Array<ContinuumCreateInput>>;
  /** Delete multiple Continuum documents */
  delete?: Maybe<Array<ContinuumWhereUniqueInput>>;
  /** Disconnect multiple Continuum documents */
  disconnect?: Maybe<Array<ContinuumWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Continuum documents */
  set?: Maybe<Array<ContinuumWhereUniqueInput>>;
  /** Update multiple Continuum documents */
  update?: Maybe<Array<ContinuumUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Continuum documents */
  upsert?: Maybe<Array<ContinuumUpsertWithNestedWhereUniqueInput>>;
};

export type ContinuumUpdateManyInput = {
  leftText?: Maybe<Scalars['String']>;
  percentageLeft?: Maybe<Scalars['Int']>;
  rightText?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ContinuumUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ContinuumUpdateManyInput;
  /** Document search */
  where: ContinuumWhereInput;
};

export type ContinuumUpdateOneInlineInput = {
  /** Connect existing Continuum document */
  connect?: Maybe<ContinuumWhereUniqueInput>;
  /** Create and connect one Continuum document */
  create?: Maybe<ContinuumCreateInput>;
  /** Delete currently connected Continuum document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Continuum document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Continuum document */
  update?: Maybe<ContinuumUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Continuum document */
  upsert?: Maybe<ContinuumUpsertWithNestedWhereUniqueInput>;
};

export type ContinuumUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ContinuumUpdateInput;
  /** Unique document search */
  where: ContinuumWhereUniqueInput;
};

export type ContinuumUpsertInput = {
  /** Create document if it didn't exist */
  create: ContinuumCreateInput;
  /** Update document if it exists */
  update: ContinuumUpdateInput;
};

export type ContinuumUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ContinuumUpsertInput;
  /** Unique document search */
  where: ContinuumWhereUniqueInput;
};

/** Identifies documents */
export type ContinuumWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ContinuumWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ContinuumWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ContinuumWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  leftText?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  leftText_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  leftText_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  leftText_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  leftText_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  leftText_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  leftText_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  leftText_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  leftText_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  leftText_starts_with?: Maybe<Scalars['String']>;
  percentageLeft?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  percentageLeft_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  percentageLeft_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  percentageLeft_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  percentageLeft_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  percentageLeft_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  percentageLeft_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  percentageLeft_not_in?: Maybe<Array<Scalars['Int']>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  rightText?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  rightText_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  rightText_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  rightText_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  rightText_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  rightText_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  rightText_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  rightText_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  rightText_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  rightText_starts_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References Continuum record uniquely */
export type ContinuumWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Mindset = Node & {
  __typename?: 'Mindset';
  activities: Array<Activity>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Mindset>;
  enabled?: Maybe<Scalars['Boolean']>;
  head?: Maybe<Scalars['String']>;
  heroImage?: Maybe<Asset>;
  /** List of Mindset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  intro?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  smallImage?: Maybe<Asset>;
  /** System stage field */
  stage: Stage;
  /** Domestic or International */
  theType?: Maybe<TheType>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  whoWhatWhereWhyHows: Array<WhoWhatWhereWhyHow>;
};


export type MindsetActivitiesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<ActivityOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ActivityWhereInput>;
};


export type MindsetCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type MindsetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type MindsetHeroImageArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type MindsetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type MindsetPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type MindsetSmallImageArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type MindsetUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type MindsetWhoWhatWhereWhyHowsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<WhoWhatWhereWhyHowOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<WhoWhatWhereWhyHowWhereInput>;
};

export type MindsetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: MindsetWhereUniqueInput;
};

/** A connection to a list of items. */
export type MindsetConnection = {
  __typename?: 'MindsetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<MindsetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type MindsetCreateInput = {
  activities?: Maybe<ActivityCreateManyInlineInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  enabled?: Maybe<Scalars['Boolean']>;
  head?: Maybe<Scalars['String']>;
  heroImage?: Maybe<AssetCreateOneInlineInput>;
  intro?: Maybe<Scalars['String']>;
  smallImage?: Maybe<AssetCreateOneInlineInput>;
  theType?: Maybe<TheType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  whoWhatWhereWhyHows?: Maybe<WhoWhatWhereWhyHowCreateManyInlineInput>;
};

export type MindsetCreateManyInlineInput = {
  /** Connect multiple existing Mindset documents */
  connect?: Maybe<Array<MindsetWhereUniqueInput>>;
  /** Create and connect multiple existing Mindset documents */
  create?: Maybe<Array<MindsetCreateInput>>;
};

export type MindsetCreateOneInlineInput = {
  /** Connect one existing Mindset document */
  connect?: Maybe<MindsetWhereUniqueInput>;
  /** Create and connect one Mindset document */
  create?: Maybe<MindsetCreateInput>;
};

/** An edge in a connection. */
export type MindsetEdge = {
  __typename?: 'MindsetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Mindset;
};

/** Identifies documents */
export type MindsetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MindsetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MindsetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MindsetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  activities_every?: Maybe<ActivityWhereInput>;
  activities_none?: Maybe<ActivityWhereInput>;
  activities_some?: Maybe<ActivityWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  enabled?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  enabled_not?: Maybe<Scalars['Boolean']>;
  head?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  head_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  head_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  head_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  head_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  head_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  head_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  head_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  head_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  head_starts_with?: Maybe<Scalars['String']>;
  heroImage?: Maybe<AssetWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  intro?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  intro_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  intro_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  intro_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  intro_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  intro_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  intro_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  intro_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  intro_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  intro_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  smallImage?: Maybe<AssetWhereInput>;
  theType?: Maybe<TheType>;
  /** All values that are contained in given list. */
  theType_in?: Maybe<Array<TheType>>;
  /** All values that are not equal to given value. */
  theType_not?: Maybe<TheType>;
  /** All values that are not contained in given list. */
  theType_not_in?: Maybe<Array<TheType>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
  whoWhatWhereWhyHows_every?: Maybe<WhoWhatWhereWhyHowWhereInput>;
  whoWhatWhereWhyHows_none?: Maybe<WhoWhatWhereWhyHowWhereInput>;
  whoWhatWhereWhyHows_some?: Maybe<WhoWhatWhereWhyHowWhereInput>;
};

export enum MindsetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EnabledAsc = 'enabled_ASC',
  EnabledDesc = 'enabled_DESC',
  HeadAsc = 'head_ASC',
  HeadDesc = 'head_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IntroAsc = 'intro_ASC',
  IntroDesc = 'intro_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TheTypeAsc = 'theType_ASC',
  TheTypeDesc = 'theType_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type MindsetUpdateInput = {
  activities?: Maybe<ActivityUpdateManyInlineInput>;
  enabled?: Maybe<Scalars['Boolean']>;
  head?: Maybe<Scalars['String']>;
  heroImage?: Maybe<AssetUpdateOneInlineInput>;
  intro?: Maybe<Scalars['String']>;
  smallImage?: Maybe<AssetUpdateOneInlineInput>;
  theType?: Maybe<TheType>;
  whoWhatWhereWhyHows?: Maybe<WhoWhatWhereWhyHowUpdateManyInlineInput>;
};

export type MindsetUpdateManyInlineInput = {
  /** Connect multiple existing Mindset documents */
  connect?: Maybe<Array<MindsetConnectInput>>;
  /** Create and connect multiple Mindset documents */
  create?: Maybe<Array<MindsetCreateInput>>;
  /** Delete multiple Mindset documents */
  delete?: Maybe<Array<MindsetWhereUniqueInput>>;
  /** Disconnect multiple Mindset documents */
  disconnect?: Maybe<Array<MindsetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Mindset documents */
  set?: Maybe<Array<MindsetWhereUniqueInput>>;
  /** Update multiple Mindset documents */
  update?: Maybe<Array<MindsetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Mindset documents */
  upsert?: Maybe<Array<MindsetUpsertWithNestedWhereUniqueInput>>;
};

export type MindsetUpdateManyInput = {
  enabled?: Maybe<Scalars['Boolean']>;
  head?: Maybe<Scalars['String']>;
  intro?: Maybe<Scalars['String']>;
  theType?: Maybe<TheType>;
};

export type MindsetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: MindsetUpdateManyInput;
  /** Document search */
  where: MindsetWhereInput;
};

export type MindsetUpdateOneInlineInput = {
  /** Connect existing Mindset document */
  connect?: Maybe<MindsetWhereUniqueInput>;
  /** Create and connect one Mindset document */
  create?: Maybe<MindsetCreateInput>;
  /** Delete currently connected Mindset document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Mindset document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Mindset document */
  update?: Maybe<MindsetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Mindset document */
  upsert?: Maybe<MindsetUpsertWithNestedWhereUniqueInput>;
};

export type MindsetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: MindsetUpdateInput;
  /** Unique document search */
  where: MindsetWhereUniqueInput;
};

export type MindsetUpsertInput = {
  /** Create document if it didn't exist */
  create: MindsetCreateInput;
  /** Update document if it exists */
  update: MindsetUpdateInput;
};

export type MindsetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: MindsetUpsertInput;
  /** Unique document search */
  where: MindsetWhereUniqueInput;
};

/** Identifies documents */
export type MindsetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<MindsetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<MindsetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<MindsetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  activities_every?: Maybe<ActivityWhereInput>;
  activities_none?: Maybe<ActivityWhereInput>;
  activities_some?: Maybe<ActivityWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  enabled?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  enabled_not?: Maybe<Scalars['Boolean']>;
  head?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  head_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  head_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  head_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  head_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  head_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  head_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  head_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  head_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  head_starts_with?: Maybe<Scalars['String']>;
  heroImage?: Maybe<AssetWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  intro?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  intro_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  intro_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  intro_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  intro_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  intro_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  intro_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  intro_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  intro_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  intro_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  smallImage?: Maybe<AssetWhereInput>;
  theType?: Maybe<TheType>;
  /** All values that are contained in given list. */
  theType_in?: Maybe<Array<TheType>>;
  /** All values that are not equal to given value. */
  theType_not?: Maybe<TheType>;
  /** All values that are not contained in given list. */
  theType_not_in?: Maybe<Array<TheType>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
  whoWhatWhereWhyHows_every?: Maybe<WhoWhatWhereWhyHowWhereInput>;
  whoWhatWhereWhyHows_none?: Maybe<WhoWhatWhereWhyHowWhereInput>;
  whoWhatWhereWhyHows_some?: Maybe<WhoWhatWhereWhyHowWhereInput>;
};

/** References Mindset record uniquely */
export type MindsetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one activity */
  createActivity?: Maybe<Activity>;
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one boxout */
  createBoxout?: Maybe<Boxout>;
  /** Create one byTheNumber */
  createByTheNumber?: Maybe<ByTheNumber>;
  /** Create one continuum */
  createContinuum?: Maybe<Continuum>;
  /** Create one mindset */
  createMindset?: Maybe<Mindset>;
  /** Create one whoWhatWhereWhyHow */
  createWhoWhatWhereWhyHow?: Maybe<WhoWhatWhereWhyHow>;
  /** Delete one activity from _all_ existing stages. Returns deleted document. */
  deleteActivity?: Maybe<Activity>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one boxout from _all_ existing stages. Returns deleted document. */
  deleteBoxout?: Maybe<Boxout>;
  /** Delete one byTheNumber from _all_ existing stages. Returns deleted document. */
  deleteByTheNumber?: Maybe<ByTheNumber>;
  /** Delete one continuum from _all_ existing stages. Returns deleted document. */
  deleteContinuum?: Maybe<Continuum>;
  /**
   * Delete many Activity documents
   * @deprecated Please use the new paginated many mutation (deleteManyActivitiesConnection)
   */
  deleteManyActivities: BatchPayload;
  /** Delete many Activity documents, return deleted documents */
  deleteManyActivitiesConnection: ActivityConnection;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Boxout documents
   * @deprecated Please use the new paginated many mutation (deleteManyBoxoutsConnection)
   */
  deleteManyBoxouts: BatchPayload;
  /** Delete many Boxout documents, return deleted documents */
  deleteManyBoxoutsConnection: BoxoutConnection;
  /**
   * Delete many ByTheNumber documents
   * @deprecated Please use the new paginated many mutation (deleteManyByTheNumbersConnection)
   */
  deleteManyByTheNumbers: BatchPayload;
  /** Delete many ByTheNumber documents, return deleted documents */
  deleteManyByTheNumbersConnection: ByTheNumberConnection;
  /**
   * Delete many Continuum documents
   * @deprecated Please use the new paginated many mutation (deleteManyContinuumsConnection)
   */
  deleteManyContinuums: BatchPayload;
  /** Delete many Continuum documents, return deleted documents */
  deleteManyContinuumsConnection: ContinuumConnection;
  /**
   * Delete many Mindset documents
   * @deprecated Please use the new paginated many mutation (deleteManyMindsetsConnection)
   */
  deleteManyMindsets: BatchPayload;
  /** Delete many Mindset documents, return deleted documents */
  deleteManyMindsetsConnection: MindsetConnection;
  /**
   * Delete many WhoWhatWhereWhyHow documents
   * @deprecated Please use the new paginated many mutation (deleteManyWhoWhatWhereWhyHowsConnection)
   */
  deleteManyWhoWhatWhereWhyHows: BatchPayload;
  /** Delete many WhoWhatWhereWhyHow documents, return deleted documents */
  deleteManyWhoWhatWhereWhyHowsConnection: WhoWhatWhereWhyHowConnection;
  /** Delete one mindset from _all_ existing stages. Returns deleted document. */
  deleteMindset?: Maybe<Mindset>;
  /** Delete one whoWhatWhereWhyHow from _all_ existing stages. Returns deleted document. */
  deleteWhoWhatWhereWhyHow?: Maybe<WhoWhatWhereWhyHow>;
  /** Publish one activity */
  publishActivity?: Maybe<Activity>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one boxout */
  publishBoxout?: Maybe<Boxout>;
  /** Publish one byTheNumber */
  publishByTheNumber?: Maybe<ByTheNumber>;
  /** Publish one continuum */
  publishContinuum?: Maybe<Continuum>;
  /**
   * Publish many Activity documents
   * @deprecated Please use the new paginated many mutation (publishManyActivitiesConnection)
   */
  publishManyActivities: BatchPayload;
  /** Publish many Activity documents */
  publishManyActivitiesConnection: ActivityConnection;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Boxout documents
   * @deprecated Please use the new paginated many mutation (publishManyBoxoutsConnection)
   */
  publishManyBoxouts: BatchPayload;
  /** Publish many Boxout documents */
  publishManyBoxoutsConnection: BoxoutConnection;
  /**
   * Publish many ByTheNumber documents
   * @deprecated Please use the new paginated many mutation (publishManyByTheNumbersConnection)
   */
  publishManyByTheNumbers: BatchPayload;
  /** Publish many ByTheNumber documents */
  publishManyByTheNumbersConnection: ByTheNumberConnection;
  /**
   * Publish many Continuum documents
   * @deprecated Please use the new paginated many mutation (publishManyContinuumsConnection)
   */
  publishManyContinuums: BatchPayload;
  /** Publish many Continuum documents */
  publishManyContinuumsConnection: ContinuumConnection;
  /**
   * Publish many Mindset documents
   * @deprecated Please use the new paginated many mutation (publishManyMindsetsConnection)
   */
  publishManyMindsets: BatchPayload;
  /** Publish many Mindset documents */
  publishManyMindsetsConnection: MindsetConnection;
  /**
   * Publish many WhoWhatWhereWhyHow documents
   * @deprecated Please use the new paginated many mutation (publishManyWhoWhatWhereWhyHowsConnection)
   */
  publishManyWhoWhatWhereWhyHows: BatchPayload;
  /** Publish many WhoWhatWhereWhyHow documents */
  publishManyWhoWhatWhereWhyHowsConnection: WhoWhatWhereWhyHowConnection;
  /** Publish one mindset */
  publishMindset?: Maybe<Mindset>;
  /** Publish one whoWhatWhereWhyHow */
  publishWhoWhatWhereWhyHow?: Maybe<WhoWhatWhereWhyHow>;
  /** Unpublish one activity from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishActivity?: Maybe<Activity>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one boxout from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishBoxout?: Maybe<Boxout>;
  /** Unpublish one byTheNumber from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishByTheNumber?: Maybe<ByTheNumber>;
  /** Unpublish one continuum from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishContinuum?: Maybe<Continuum>;
  /**
   * Unpublish many Activity documents
   * @deprecated Please use the new paginated many mutation (unpublishManyActivitiesConnection)
   */
  unpublishManyActivities: BatchPayload;
  /** Find many Activity documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyActivitiesConnection: ActivityConnection;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Boxout documents
   * @deprecated Please use the new paginated many mutation (unpublishManyBoxoutsConnection)
   */
  unpublishManyBoxouts: BatchPayload;
  /** Find many Boxout documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyBoxoutsConnection: BoxoutConnection;
  /**
   * Unpublish many ByTheNumber documents
   * @deprecated Please use the new paginated many mutation (unpublishManyByTheNumbersConnection)
   */
  unpublishManyByTheNumbers: BatchPayload;
  /** Find many ByTheNumber documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyByTheNumbersConnection: ByTheNumberConnection;
  /**
   * Unpublish many Continuum documents
   * @deprecated Please use the new paginated many mutation (unpublishManyContinuumsConnection)
   */
  unpublishManyContinuums: BatchPayload;
  /** Find many Continuum documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyContinuumsConnection: ContinuumConnection;
  /**
   * Unpublish many Mindset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyMindsetsConnection)
   */
  unpublishManyMindsets: BatchPayload;
  /** Find many Mindset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyMindsetsConnection: MindsetConnection;
  /**
   * Unpublish many WhoWhatWhereWhyHow documents
   * @deprecated Please use the new paginated many mutation (unpublishManyWhoWhatWhereWhyHowsConnection)
   */
  unpublishManyWhoWhatWhereWhyHows: BatchPayload;
  /** Find many WhoWhatWhereWhyHow documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyWhoWhatWhereWhyHowsConnection: WhoWhatWhereWhyHowConnection;
  /** Unpublish one mindset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishMindset?: Maybe<Mindset>;
  /** Unpublish one whoWhatWhereWhyHow from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishWhoWhatWhereWhyHow?: Maybe<WhoWhatWhereWhyHow>;
  /** Update one activity */
  updateActivity?: Maybe<Activity>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one boxout */
  updateBoxout?: Maybe<Boxout>;
  /** Update one byTheNumber */
  updateByTheNumber?: Maybe<ByTheNumber>;
  /** Update one continuum */
  updateContinuum?: Maybe<Continuum>;
  /**
   * Update many activities
   * @deprecated Please use the new paginated many mutation (updateManyActivitiesConnection)
   */
  updateManyActivities: BatchPayload;
  /** Update many Activity documents */
  updateManyActivitiesConnection: ActivityConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many boxouts
   * @deprecated Please use the new paginated many mutation (updateManyBoxoutsConnection)
   */
  updateManyBoxouts: BatchPayload;
  /** Update many Boxout documents */
  updateManyBoxoutsConnection: BoxoutConnection;
  /**
   * Update many byTheNumbers
   * @deprecated Please use the new paginated many mutation (updateManyByTheNumbersConnection)
   */
  updateManyByTheNumbers: BatchPayload;
  /** Update many ByTheNumber documents */
  updateManyByTheNumbersConnection: ByTheNumberConnection;
  /**
   * Update many continuums
   * @deprecated Please use the new paginated many mutation (updateManyContinuumsConnection)
   */
  updateManyContinuums: BatchPayload;
  /** Update many Continuum documents */
  updateManyContinuumsConnection: ContinuumConnection;
  /**
   * Update many mindsets
   * @deprecated Please use the new paginated many mutation (updateManyMindsetsConnection)
   */
  updateManyMindsets: BatchPayload;
  /** Update many Mindset documents */
  updateManyMindsetsConnection: MindsetConnection;
  /**
   * Update many whoWhatWhereWhyHows
   * @deprecated Please use the new paginated many mutation (updateManyWhoWhatWhereWhyHowsConnection)
   */
  updateManyWhoWhatWhereWhyHows: BatchPayload;
  /** Update many WhoWhatWhereWhyHow documents */
  updateManyWhoWhatWhereWhyHowsConnection: WhoWhatWhereWhyHowConnection;
  /** Update one mindset */
  updateMindset?: Maybe<Mindset>;
  /** Update one whoWhatWhereWhyHow */
  updateWhoWhatWhereWhyHow?: Maybe<WhoWhatWhereWhyHow>;
  /** Upsert one activity */
  upsertActivity?: Maybe<Activity>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one boxout */
  upsertBoxout?: Maybe<Boxout>;
  /** Upsert one byTheNumber */
  upsertByTheNumber?: Maybe<ByTheNumber>;
  /** Upsert one continuum */
  upsertContinuum?: Maybe<Continuum>;
  /** Upsert one mindset */
  upsertMindset?: Maybe<Mindset>;
  /** Upsert one whoWhatWhereWhyHow */
  upsertWhoWhatWhereWhyHow?: Maybe<WhoWhatWhereWhyHow>;
};


export type MutationCreateActivityArgs = {
  data: ActivityCreateInput;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateBoxoutArgs = {
  data: BoxoutCreateInput;
};


export type MutationCreateByTheNumberArgs = {
  data: ByTheNumberCreateInput;
};


export type MutationCreateContinuumArgs = {
  data: ContinuumCreateInput;
};


export type MutationCreateMindsetArgs = {
  data: MindsetCreateInput;
};


export type MutationCreateWhoWhatWhereWhyHowArgs = {
  data: WhoWhatWhereWhyHowCreateInput;
};


export type MutationDeleteActivityArgs = {
  where: ActivityWhereUniqueInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteBoxoutArgs = {
  where: BoxoutWhereUniqueInput;
};


export type MutationDeleteByTheNumberArgs = {
  where: ByTheNumberWhereUniqueInput;
};


export type MutationDeleteContinuumArgs = {
  where: ContinuumWhereUniqueInput;
};


export type MutationDeleteManyActivitiesArgs = {
  where?: Maybe<ActivityManyWhereInput>;
};


export type MutationDeleteManyActivitiesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ActivityManyWhereInput>;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationDeleteManyBoxoutsArgs = {
  where?: Maybe<BoxoutManyWhereInput>;
};


export type MutationDeleteManyBoxoutsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<BoxoutManyWhereInput>;
};


export type MutationDeleteManyByTheNumbersArgs = {
  where?: Maybe<ByTheNumberManyWhereInput>;
};


export type MutationDeleteManyByTheNumbersConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ByTheNumberManyWhereInput>;
};


export type MutationDeleteManyContinuumsArgs = {
  where?: Maybe<ContinuumManyWhereInput>;
};


export type MutationDeleteManyContinuumsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ContinuumManyWhereInput>;
};


export type MutationDeleteManyMindsetsArgs = {
  where?: Maybe<MindsetManyWhereInput>;
};


export type MutationDeleteManyMindsetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MindsetManyWhereInput>;
};


export type MutationDeleteManyWhoWhatWhereWhyHowsArgs = {
  where?: Maybe<WhoWhatWhereWhyHowManyWhereInput>;
};


export type MutationDeleteManyWhoWhatWhereWhyHowsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<WhoWhatWhereWhyHowManyWhereInput>;
};


export type MutationDeleteMindsetArgs = {
  where: MindsetWhereUniqueInput;
};


export type MutationDeleteWhoWhatWhereWhyHowArgs = {
  where: WhoWhatWhereWhyHowWhereUniqueInput;
};


export type MutationPublishActivityArgs = {
  to?: Array<Stage>;
  where: ActivityWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishBoxoutArgs = {
  to?: Array<Stage>;
  where: BoxoutWhereUniqueInput;
};


export type MutationPublishByTheNumberArgs = {
  to?: Array<Stage>;
  where: ByTheNumberWhereUniqueInput;
};


export type MutationPublishContinuumArgs = {
  to?: Array<Stage>;
  where: ContinuumWhereUniqueInput;
};


export type MutationPublishManyActivitiesArgs = {
  to?: Array<Stage>;
  where?: Maybe<ActivityManyWhereInput>;
};


export type MutationPublishManyActivitiesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<ActivityManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: Maybe<AssetManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<AssetManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyBoxoutsArgs = {
  to?: Array<Stage>;
  where?: Maybe<BoxoutManyWhereInput>;
};


export type MutationPublishManyBoxoutsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<BoxoutManyWhereInput>;
};


export type MutationPublishManyByTheNumbersArgs = {
  to?: Array<Stage>;
  where?: Maybe<ByTheNumberManyWhereInput>;
};


export type MutationPublishManyByTheNumbersConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<ByTheNumberManyWhereInput>;
};


export type MutationPublishManyContinuumsArgs = {
  to?: Array<Stage>;
  where?: Maybe<ContinuumManyWhereInput>;
};


export type MutationPublishManyContinuumsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<ContinuumManyWhereInput>;
};


export type MutationPublishManyMindsetsArgs = {
  to?: Array<Stage>;
  where?: Maybe<MindsetManyWhereInput>;
};


export type MutationPublishManyMindsetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<MindsetManyWhereInput>;
};


export type MutationPublishManyWhoWhatWhereWhyHowsArgs = {
  to?: Array<Stage>;
  where?: Maybe<WhoWhatWhereWhyHowManyWhereInput>;
};


export type MutationPublishManyWhoWhatWhereWhyHowsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<WhoWhatWhereWhyHowManyWhereInput>;
};


export type MutationPublishMindsetArgs = {
  to?: Array<Stage>;
  where: MindsetWhereUniqueInput;
};


export type MutationPublishWhoWhatWhereWhyHowArgs = {
  to?: Array<Stage>;
  where: WhoWhatWhereWhyHowWhereUniqueInput;
};


export type MutationUnpublishActivityArgs = {
  from?: Array<Stage>;
  where: ActivityWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishBoxoutArgs = {
  from?: Array<Stage>;
  where: BoxoutWhereUniqueInput;
};


export type MutationUnpublishByTheNumberArgs = {
  from?: Array<Stage>;
  where: ByTheNumberWhereUniqueInput;
};


export type MutationUnpublishContinuumArgs = {
  from?: Array<Stage>;
  where: ContinuumWhereUniqueInput;
};


export type MutationUnpublishManyActivitiesArgs = {
  from?: Array<Stage>;
  where?: Maybe<ActivityManyWhereInput>;
};


export type MutationUnpublishManyActivitiesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<ActivityManyWhereInput>;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyBoxoutsArgs = {
  from?: Array<Stage>;
  where?: Maybe<BoxoutManyWhereInput>;
};


export type MutationUnpublishManyBoxoutsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<BoxoutManyWhereInput>;
};


export type MutationUnpublishManyByTheNumbersArgs = {
  from?: Array<Stage>;
  where?: Maybe<ByTheNumberManyWhereInput>;
};


export type MutationUnpublishManyByTheNumbersConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<ByTheNumberManyWhereInput>;
};


export type MutationUnpublishManyContinuumsArgs = {
  from?: Array<Stage>;
  where?: Maybe<ContinuumManyWhereInput>;
};


export type MutationUnpublishManyContinuumsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<ContinuumManyWhereInput>;
};


export type MutationUnpublishManyMindsetsArgs = {
  from?: Array<Stage>;
  where?: Maybe<MindsetManyWhereInput>;
};


export type MutationUnpublishManyMindsetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<MindsetManyWhereInput>;
};


export type MutationUnpublishManyWhoWhatWhereWhyHowsArgs = {
  from?: Array<Stage>;
  where?: Maybe<WhoWhatWhereWhyHowManyWhereInput>;
};


export type MutationUnpublishManyWhoWhatWhereWhyHowsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<WhoWhatWhereWhyHowManyWhereInput>;
};


export type MutationUnpublishMindsetArgs = {
  from?: Array<Stage>;
  where: MindsetWhereUniqueInput;
};


export type MutationUnpublishWhoWhatWhereWhyHowArgs = {
  from?: Array<Stage>;
  where: WhoWhatWhereWhyHowWhereUniqueInput;
};


export type MutationUpdateActivityArgs = {
  data: ActivityUpdateInput;
  where: ActivityWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateBoxoutArgs = {
  data: BoxoutUpdateInput;
  where: BoxoutWhereUniqueInput;
};


export type MutationUpdateByTheNumberArgs = {
  data: ByTheNumberUpdateInput;
  where: ByTheNumberWhereUniqueInput;
};


export type MutationUpdateContinuumArgs = {
  data: ContinuumUpdateInput;
  where: ContinuumWhereUniqueInput;
};


export type MutationUpdateManyActivitiesArgs = {
  data: ActivityUpdateManyInput;
  where?: Maybe<ActivityManyWhereInput>;
};


export type MutationUpdateManyActivitiesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: ActivityUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ActivityManyWhereInput>;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUpdateManyBoxoutsArgs = {
  data: BoxoutUpdateManyInput;
  where?: Maybe<BoxoutManyWhereInput>;
};


export type MutationUpdateManyBoxoutsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: BoxoutUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<BoxoutManyWhereInput>;
};


export type MutationUpdateManyByTheNumbersArgs = {
  data: ByTheNumberUpdateManyInput;
  where?: Maybe<ByTheNumberManyWhereInput>;
};


export type MutationUpdateManyByTheNumbersConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: ByTheNumberUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ByTheNumberManyWhereInput>;
};


export type MutationUpdateManyContinuumsArgs = {
  data: ContinuumUpdateManyInput;
  where?: Maybe<ContinuumManyWhereInput>;
};


export type MutationUpdateManyContinuumsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: ContinuumUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ContinuumManyWhereInput>;
};


export type MutationUpdateManyMindsetsArgs = {
  data: MindsetUpdateManyInput;
  where?: Maybe<MindsetManyWhereInput>;
};


export type MutationUpdateManyMindsetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: MindsetUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<MindsetManyWhereInput>;
};


export type MutationUpdateManyWhoWhatWhereWhyHowsArgs = {
  data: WhoWhatWhereWhyHowUpdateManyInput;
  where?: Maybe<WhoWhatWhereWhyHowManyWhereInput>;
};


export type MutationUpdateManyWhoWhatWhereWhyHowsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: WhoWhatWhereWhyHowUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<WhoWhatWhereWhyHowManyWhereInput>;
};


export type MutationUpdateMindsetArgs = {
  data: MindsetUpdateInput;
  where: MindsetWhereUniqueInput;
};


export type MutationUpdateWhoWhatWhereWhyHowArgs = {
  data: WhoWhatWhereWhyHowUpdateInput;
  where: WhoWhatWhereWhyHowWhereUniqueInput;
};


export type MutationUpsertActivityArgs = {
  upsert: ActivityUpsertInput;
  where: ActivityWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertBoxoutArgs = {
  upsert: BoxoutUpsertInput;
  where: BoxoutWhereUniqueInput;
};


export type MutationUpsertByTheNumberArgs = {
  upsert: ByTheNumberUpsertInput;
  where: ByTheNumberWhereUniqueInput;
};


export type MutationUpsertContinuumArgs = {
  upsert: ContinuumUpsertInput;
  where: ContinuumWhereUniqueInput;
};


export type MutationUpsertMindsetArgs = {
  upsert: MindsetUpsertInput;
  where: MindsetWhereUniqueInput;
};


export type MutationUpsertWhoWhatWhereWhyHowArgs = {
  upsert: WhoWhatWhereWhyHowUpsertInput;
  where: WhoWhatWhereWhyHowWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve multiple activities */
  activities: Array<Activity>;
  /** Retrieve multiple activities using the Relay connection interface */
  activitiesConnection: ActivityConnection;
  /** Retrieve a single activity */
  activity?: Maybe<Activity>;
  /** Retrieve document version */
  activityVersion?: Maybe<DocumentVersion>;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single boxout */
  boxout?: Maybe<Boxout>;
  /** Retrieve document version */
  boxoutVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple boxouts */
  boxouts: Array<Boxout>;
  /** Retrieve multiple boxouts using the Relay connection interface */
  boxoutsConnection: BoxoutConnection;
  /** Retrieve a single byTheNumber */
  byTheNumber?: Maybe<ByTheNumber>;
  /** Retrieve document version */
  byTheNumberVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple byTheNumbers */
  byTheNumbers: Array<ByTheNumber>;
  /** Retrieve multiple byTheNumbers using the Relay connection interface */
  byTheNumbersConnection: ByTheNumberConnection;
  /** Retrieve a single continuum */
  continuum?: Maybe<Continuum>;
  /** Retrieve document version */
  continuumVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple continuums */
  continuums: Array<Continuum>;
  /** Retrieve multiple continuums using the Relay connection interface */
  continuumsConnection: ContinuumConnection;
  /** Retrieve a single mindset */
  mindset?: Maybe<Mindset>;
  /** Retrieve document version */
  mindsetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple mindsets */
  mindsets: Array<Mindset>;
  /** Retrieve multiple mindsets using the Relay connection interface */
  mindsetsConnection: MindsetConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
  /** Retrieve a single whoWhatWhereWhyHow */
  whoWhatWhereWhyHow?: Maybe<WhoWhatWhereWhyHow>;
  /** Retrieve document version */
  whoWhatWhereWhyHowVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple whoWhatWhereWhyHows */
  whoWhatWhereWhyHows: Array<WhoWhatWhereWhyHow>;
  /** Retrieve multiple whoWhatWhereWhyHows using the Relay connection interface */
  whoWhatWhereWhyHowsConnection: WhoWhatWhereWhyHowConnection;
};


export type QueryActivitiesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ActivityOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ActivityWhereInput>;
};


export type QueryActivitiesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ActivityOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ActivityWhereInput>;
};


export type QueryActivityArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ActivityWhereUniqueInput;
};


export type QueryActivityVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<AssetWhereInput>;
};


export type QueryBoxoutArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: BoxoutWhereUniqueInput;
};


export type QueryBoxoutVersionArgs = {
  where: VersionWhereInput;
};


export type QueryBoxoutsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<BoxoutOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<BoxoutWhereInput>;
};


export type QueryBoxoutsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<BoxoutOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<BoxoutWhereInput>;
};


export type QueryByTheNumberArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ByTheNumberWhereUniqueInput;
};


export type QueryByTheNumberVersionArgs = {
  where: VersionWhereInput;
};


export type QueryByTheNumbersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ByTheNumberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ByTheNumberWhereInput>;
};


export type QueryByTheNumbersConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ByTheNumberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ByTheNumberWhereInput>;
};


export type QueryContinuumArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ContinuumWhereUniqueInput;
};


export type QueryContinuumVersionArgs = {
  where: VersionWhereInput;
};


export type QueryContinuumsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ContinuumOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ContinuumWhereInput>;
};


export type QueryContinuumsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ContinuumOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<ContinuumWhereInput>;
};


export type QueryMindsetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: MindsetWhereUniqueInput;
};


export type QueryMindsetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryMindsetsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<MindsetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<MindsetWhereInput>;
};


export type QueryMindsetsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<MindsetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<MindsetWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<UserWhereInput>;
};


export type QueryWhoWhatWhereWhyHowArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: WhoWhatWhereWhyHowWhereUniqueInput;
};


export type QueryWhoWhatWhereWhyHowVersionArgs = {
  where: VersionWhereInput;
};


export type QueryWhoWhatWhereWhyHowsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<WhoWhatWhereWhyHowOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<WhoWhatWhereWhyHowWhereInput>;
};


export type QueryWhoWhatWhereWhyHowsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<WhoWhatWhereWhyHowOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<WhoWhatWhereWhyHowWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

/** domestic or international */
export enum TheType {
  Domestic = 'domestic',
  International = 'international'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
  name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type WhoWhatWhereWhyHow = Node & {
  __typename?: 'WhoWhatWhereWhyHow';
  additionalBody?: Maybe<RichText>;
  additionalBoxouts: Array<Boxout>;
  additionalQuotes: Array<Scalars['String']>;
  body?: Maybe<RichText>;
  boxout?: Maybe<Boxout>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<WhoWhatWhereWhyHow>;
  /** List of WhoWhatWhereWhyHow versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  intro?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  quotes: Array<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  theType?: Maybe<WhoWhatWhereWhyHowType>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type WhoWhatWhereWhyHowAdditionalBoxoutsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<BoxoutOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<BoxoutWhereInput>;
};


export type WhoWhatWhereWhyHowBoxoutArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type WhoWhatWhereWhyHowCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type WhoWhatWhereWhyHowDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type WhoWhatWhereWhyHowHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type WhoWhatWhereWhyHowPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type WhoWhatWhereWhyHowUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type WhoWhatWhereWhyHowConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: WhoWhatWhereWhyHowWhereUniqueInput;
};

/** A connection to a list of items. */
export type WhoWhatWhereWhyHowConnection = {
  __typename?: 'WhoWhatWhereWhyHowConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<WhoWhatWhereWhyHowEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type WhoWhatWhereWhyHowCreateInput = {
  additionalBody?: Maybe<Scalars['RichTextAST']>;
  additionalBoxouts?: Maybe<BoxoutCreateManyInlineInput>;
  additionalQuotes?: Maybe<Array<Scalars['String']>>;
  body?: Maybe<Scalars['RichTextAST']>;
  boxout?: Maybe<BoxoutCreateOneInlineInput>;
  ckuvss8c024l101xid05ye343?: Maybe<MindsetCreateManyInlineInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  intro?: Maybe<Scalars['String']>;
  quotes?: Maybe<Array<Scalars['String']>>;
  theType?: Maybe<WhoWhatWhereWhyHowType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WhoWhatWhereWhyHowCreateManyInlineInput = {
  /** Connect multiple existing WhoWhatWhereWhyHow documents */
  connect?: Maybe<Array<WhoWhatWhereWhyHowWhereUniqueInput>>;
  /** Create and connect multiple existing WhoWhatWhereWhyHow documents */
  create?: Maybe<Array<WhoWhatWhereWhyHowCreateInput>>;
};

export type WhoWhatWhereWhyHowCreateOneInlineInput = {
  /** Connect one existing WhoWhatWhereWhyHow document */
  connect?: Maybe<WhoWhatWhereWhyHowWhereUniqueInput>;
  /** Create and connect one WhoWhatWhereWhyHow document */
  create?: Maybe<WhoWhatWhereWhyHowCreateInput>;
};

/** An edge in a connection. */
export type WhoWhatWhereWhyHowEdge = {
  __typename?: 'WhoWhatWhereWhyHowEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: WhoWhatWhereWhyHow;
};

/** Identifies documents */
export type WhoWhatWhereWhyHowManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<WhoWhatWhereWhyHowWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<WhoWhatWhereWhyHowWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<WhoWhatWhereWhyHowWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  additionalBoxouts_every?: Maybe<BoxoutWhereInput>;
  additionalBoxouts_none?: Maybe<BoxoutWhereInput>;
  additionalBoxouts_some?: Maybe<BoxoutWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  additionalQuotes?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  additionalQuotes_contains_all?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  additionalQuotes_contains_none?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  additionalQuotes_contains_some?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  additionalQuotes_not?: Maybe<Array<Scalars['String']>>;
  boxout?: Maybe<BoxoutWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  intro?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  intro_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  intro_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  intro_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  intro_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  intro_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  intro_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  intro_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  intro_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  intro_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  quotes?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  quotes_contains_all?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  quotes_contains_none?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  quotes_contains_some?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  quotes_not?: Maybe<Array<Scalars['String']>>;
  theType?: Maybe<WhoWhatWhereWhyHowType>;
  /** All values that are contained in given list. */
  theType_in?: Maybe<Array<WhoWhatWhereWhyHowType>>;
  /** All values that are not equal to given value. */
  theType_not?: Maybe<WhoWhatWhereWhyHowType>;
  /** All values that are not contained in given list. */
  theType_not_in?: Maybe<Array<WhoWhatWhereWhyHowType>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum WhoWhatWhereWhyHowOrderByInput {
  AdditionalQuotesAsc = 'additionalQuotes_ASC',
  AdditionalQuotesDesc = 'additionalQuotes_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IntroAsc = 'intro_ASC',
  IntroDesc = 'intro_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  QuotesAsc = 'quotes_ASC',
  QuotesDesc = 'quotes_DESC',
  TheTypeAsc = 'theType_ASC',
  TheTypeDesc = 'theType_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export enum WhoWhatWhereWhyHowType {
  How = 'how',
  What = 'what',
  Where = 'where',
  Who = 'who',
  Why = 'why'
}

export type WhoWhatWhereWhyHowUpdateInput = {
  additionalBody?: Maybe<Scalars['RichTextAST']>;
  additionalBoxouts?: Maybe<BoxoutUpdateManyInlineInput>;
  additionalQuotes?: Maybe<Array<Scalars['String']>>;
  body?: Maybe<Scalars['RichTextAST']>;
  boxout?: Maybe<BoxoutUpdateOneInlineInput>;
  ckuvss8c024l101xid05ye343?: Maybe<MindsetUpdateManyInlineInput>;
  intro?: Maybe<Scalars['String']>;
  quotes?: Maybe<Array<Scalars['String']>>;
  theType?: Maybe<WhoWhatWhereWhyHowType>;
};

export type WhoWhatWhereWhyHowUpdateManyInlineInput = {
  /** Connect multiple existing WhoWhatWhereWhyHow documents */
  connect?: Maybe<Array<WhoWhatWhereWhyHowConnectInput>>;
  /** Create and connect multiple WhoWhatWhereWhyHow documents */
  create?: Maybe<Array<WhoWhatWhereWhyHowCreateInput>>;
  /** Delete multiple WhoWhatWhereWhyHow documents */
  delete?: Maybe<Array<WhoWhatWhereWhyHowWhereUniqueInput>>;
  /** Disconnect multiple WhoWhatWhereWhyHow documents */
  disconnect?: Maybe<Array<WhoWhatWhereWhyHowWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing WhoWhatWhereWhyHow documents */
  set?: Maybe<Array<WhoWhatWhereWhyHowWhereUniqueInput>>;
  /** Update multiple WhoWhatWhereWhyHow documents */
  update?: Maybe<Array<WhoWhatWhereWhyHowUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple WhoWhatWhereWhyHow documents */
  upsert?: Maybe<Array<WhoWhatWhereWhyHowUpsertWithNestedWhereUniqueInput>>;
};

export type WhoWhatWhereWhyHowUpdateManyInput = {
  additionalBody?: Maybe<Scalars['RichTextAST']>;
  additionalQuotes?: Maybe<Array<Scalars['String']>>;
  body?: Maybe<Scalars['RichTextAST']>;
  intro?: Maybe<Scalars['String']>;
  quotes?: Maybe<Array<Scalars['String']>>;
  theType?: Maybe<WhoWhatWhereWhyHowType>;
};

export type WhoWhatWhereWhyHowUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: WhoWhatWhereWhyHowUpdateManyInput;
  /** Document search */
  where: WhoWhatWhereWhyHowWhereInput;
};

export type WhoWhatWhereWhyHowUpdateOneInlineInput = {
  /** Connect existing WhoWhatWhereWhyHow document */
  connect?: Maybe<WhoWhatWhereWhyHowWhereUniqueInput>;
  /** Create and connect one WhoWhatWhereWhyHow document */
  create?: Maybe<WhoWhatWhereWhyHowCreateInput>;
  /** Delete currently connected WhoWhatWhereWhyHow document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected WhoWhatWhereWhyHow document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single WhoWhatWhereWhyHow document */
  update?: Maybe<WhoWhatWhereWhyHowUpdateWithNestedWhereUniqueInput>;
  /** Upsert single WhoWhatWhereWhyHow document */
  upsert?: Maybe<WhoWhatWhereWhyHowUpsertWithNestedWhereUniqueInput>;
};

export type WhoWhatWhereWhyHowUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: WhoWhatWhereWhyHowUpdateInput;
  /** Unique document search */
  where: WhoWhatWhereWhyHowWhereUniqueInput;
};

export type WhoWhatWhereWhyHowUpsertInput = {
  /** Create document if it didn't exist */
  create: WhoWhatWhereWhyHowCreateInput;
  /** Update document if it exists */
  update: WhoWhatWhereWhyHowUpdateInput;
};

export type WhoWhatWhereWhyHowUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: WhoWhatWhereWhyHowUpsertInput;
  /** Unique document search */
  where: WhoWhatWhereWhyHowWhereUniqueInput;
};

/** Identifies documents */
export type WhoWhatWhereWhyHowWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<WhoWhatWhereWhyHowWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<WhoWhatWhereWhyHowWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<WhoWhatWhereWhyHowWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  additionalBoxouts_every?: Maybe<BoxoutWhereInput>;
  additionalBoxouts_none?: Maybe<BoxoutWhereInput>;
  additionalBoxouts_some?: Maybe<BoxoutWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  additionalQuotes?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  additionalQuotes_contains_all?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  additionalQuotes_contains_none?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  additionalQuotes_contains_some?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  additionalQuotes_not?: Maybe<Array<Scalars['String']>>;
  boxout?: Maybe<BoxoutWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  intro?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  intro_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  intro_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  intro_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  intro_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  intro_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  intro_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  intro_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  intro_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  intro_starts_with?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedBy?: Maybe<UserWhereInput>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  quotes?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  quotes_contains_all?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  quotes_contains_none?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  quotes_contains_some?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  quotes_not?: Maybe<Array<Scalars['String']>>;
  theType?: Maybe<WhoWhatWhereWhyHowType>;
  /** All values that are contained in given list. */
  theType_in?: Maybe<Array<WhoWhatWhereWhyHowType>>;
  /** All values that are not equal to given value. */
  theType_not?: Maybe<WhoWhatWhereWhyHowType>;
  /** All values that are not contained in given list. */
  theType_not_in?: Maybe<Array<WhoWhatWhereWhyHowType>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References WhoWhatWhereWhyHow record uniquely */
export type WhoWhatWhereWhyHowWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type GetDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDataQuery = { __typename?: 'Query', mindsets: Array<{ __typename?: 'Mindset', id: string, enabled?: boolean | null | undefined, head?: string | null | undefined, intro?: string | null | undefined, theType?: TheType | null | undefined, activities: Array<{ __typename?: 'Activity', id: string, title?: string | null | undefined }>, whoWhatWhereWhyHows: Array<{ __typename?: 'WhoWhatWhereWhyHow', theType?: WhoWhatWhereWhyHowType | null | undefined, intro?: string | null | undefined, quotes: Array<string>, body?: { __typename?: 'RichText', html: string } | null | undefined, boxout?: { __typename?: 'Boxout', title?: string | null | undefined, largeText?: string | null | undefined, content?: string | null | undefined, backgroundImage?: { __typename?: 'Asset', url: string } | null | undefined } | null | undefined }>, smallImage?: { __typename?: 'Asset', url: string } | null | undefined, heroImage?: { __typename?: 'Asset', url: string } | null | undefined }>, activities: Array<{ __typename?: 'Activity', id: string, title?: string | null | undefined }> };


export const GetDataDocument = `
    query GetData {
  mindsets {
    id
    enabled
    head
    intro
    theType
    activities {
      id
      title
    }
    whoWhatWhereWhyHows {
      theType
      intro
      body {
        html
      }
      quotes
      boxout {
        title
        largeText
        content
        backgroundImage {
          url
        }
      }
    }
    smallImage {
      url
    }
    heroImage {
      url
    }
  }
  activities {
    id
    title
  }
}
    `;
export const useGetDataQuery = <
      TData = GetDataQuery,
      TError = unknown
    >(
      variables?: GetDataQueryVariables,
      options?: UseQueryOptions<GetDataQuery, TError, TData>
    ) =>
    useQuery<GetDataQuery, TError, TData>(
      variables === undefined ? ['GetData'] : ['GetData', variables],
      fetcher<GetDataQuery, GetDataQueryVariables>(GetDataDocument, variables),
      options
    );