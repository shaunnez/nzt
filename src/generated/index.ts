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

export type How = Node & {
  __typename?: 'How';
  body?: Maybe<RichText>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<How>;
  /** List of How versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  intro?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  quote?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type HowCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type HowDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type HowHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type HowPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type HowUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type HowConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: HowWhereUniqueInput;
};

/** A connection to a list of items. */
export type HowConnection = {
  __typename?: 'HowConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<HowEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type HowCreateInput = {
  body?: Maybe<Scalars['RichTextAST']>;
  ckursn82n0fz601xm0ksuc7a8?: Maybe<MindsetCreateManyInlineInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  intro?: Maybe<Scalars['String']>;
  quote?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HowCreateManyInlineInput = {
  /** Connect multiple existing How documents */
  connect?: Maybe<Array<HowWhereUniqueInput>>;
  /** Create and connect multiple existing How documents */
  create?: Maybe<Array<HowCreateInput>>;
};

export type HowCreateOneInlineInput = {
  /** Connect one existing How document */
  connect?: Maybe<HowWhereUniqueInput>;
  /** Create and connect one How document */
  create?: Maybe<HowCreateInput>;
};

/** An edge in a connection. */
export type HowEdge = {
  __typename?: 'HowEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: How;
};

/** Identifies documents */
export type HowManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<HowWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<HowWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<HowWhereInput>>;
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
  quote?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  quote_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  quote_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  quote_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  quote_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  quote_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  quote_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  quote_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  quote_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  quote_starts_with?: Maybe<Scalars['String']>;
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

export enum HowOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IntroAsc = 'intro_ASC',
  IntroDesc = 'intro_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  QuoteAsc = 'quote_ASC',
  QuoteDesc = 'quote_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type HowUpdateInput = {
  body?: Maybe<Scalars['RichTextAST']>;
  ckursn82n0fz601xm0ksuc7a8?: Maybe<MindsetUpdateManyInlineInput>;
  intro?: Maybe<Scalars['String']>;
  quote?: Maybe<Scalars['String']>;
};

export type HowUpdateManyInlineInput = {
  /** Connect multiple existing How documents */
  connect?: Maybe<Array<HowConnectInput>>;
  /** Create and connect multiple How documents */
  create?: Maybe<Array<HowCreateInput>>;
  /** Delete multiple How documents */
  delete?: Maybe<Array<HowWhereUniqueInput>>;
  /** Disconnect multiple How documents */
  disconnect?: Maybe<Array<HowWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing How documents */
  set?: Maybe<Array<HowWhereUniqueInput>>;
  /** Update multiple How documents */
  update?: Maybe<Array<HowUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple How documents */
  upsert?: Maybe<Array<HowUpsertWithNestedWhereUniqueInput>>;
};

export type HowUpdateManyInput = {
  body?: Maybe<Scalars['RichTextAST']>;
  intro?: Maybe<Scalars['String']>;
  quote?: Maybe<Scalars['String']>;
};

export type HowUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HowUpdateManyInput;
  /** Document search */
  where: HowWhereInput;
};

export type HowUpdateOneInlineInput = {
  /** Connect existing How document */
  connect?: Maybe<HowWhereUniqueInput>;
  /** Create and connect one How document */
  create?: Maybe<HowCreateInput>;
  /** Delete currently connected How document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected How document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single How document */
  update?: Maybe<HowUpdateWithNestedWhereUniqueInput>;
  /** Upsert single How document */
  upsert?: Maybe<HowUpsertWithNestedWhereUniqueInput>;
};

export type HowUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HowUpdateInput;
  /** Unique document search */
  where: HowWhereUniqueInput;
};

export type HowUpsertInput = {
  /** Create document if it didn't exist */
  create: HowCreateInput;
  /** Update document if it exists */
  update: HowUpdateInput;
};

export type HowUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HowUpsertInput;
  /** Unique document search */
  where: HowWhereUniqueInput;
};

/** Identifies documents */
export type HowWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<HowWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<HowWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<HowWhereInput>>;
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
  quote?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  quote_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  quote_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  quote_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  quote_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  quote_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  quote_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  quote_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  quote_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  quote_starts_with?: Maybe<Scalars['String']>;
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

/** References How record uniquely */
export type HowWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
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
  head?: Maybe<Scalars['String']>;
  heroImage?: Maybe<Asset>;
  /** List of Mindset versions */
  history: Array<Version>;
  how?: Maybe<How>;
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
  subhead?: Maybe<Scalars['String']>;
  /** Domestic or International */
  theType?: Maybe<TheType>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  what?: Maybe<What>;
  where?: Maybe<Where>;
  who?: Maybe<Who>;
  why?: Maybe<Why>;
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


export type MindsetHowArgs = {
  locales?: Maybe<Array<Locale>>;
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


export type MindsetWhatArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type MindsetWhereArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type MindsetWhoArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type MindsetWhyArgs = {
  locales?: Maybe<Array<Locale>>;
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
  head?: Maybe<Scalars['String']>;
  heroImage?: Maybe<AssetCreateOneInlineInput>;
  how?: Maybe<HowCreateOneInlineInput>;
  intro?: Maybe<Scalars['String']>;
  smallImage?: Maybe<AssetCreateOneInlineInput>;
  subhead?: Maybe<Scalars['String']>;
  theType?: Maybe<TheType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  what?: Maybe<WhatCreateOneInlineInput>;
  where?: Maybe<WhereCreateOneInlineInput>;
  who?: Maybe<WhoCreateOneInlineInput>;
  why?: Maybe<WhyCreateOneInlineInput>;
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
  how?: Maybe<HowWhereInput>;
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
  subhead?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  subhead_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  subhead_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subhead_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  subhead_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  subhead_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  subhead_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subhead_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  subhead_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  subhead_starts_with?: Maybe<Scalars['String']>;
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
  what?: Maybe<WhatWhereInput>;
  where?: Maybe<WhereWhereInput>;
  who?: Maybe<WhoWhereInput>;
  why?: Maybe<WhyWhereInput>;
};

export enum MindsetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HeadAsc = 'head_ASC',
  HeadDesc = 'head_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IntroAsc = 'intro_ASC',
  IntroDesc = 'intro_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SubheadAsc = 'subhead_ASC',
  SubheadDesc = 'subhead_DESC',
  TheTypeAsc = 'theType_ASC',
  TheTypeDesc = 'theType_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type MindsetUpdateInput = {
  activities?: Maybe<ActivityUpdateManyInlineInput>;
  head?: Maybe<Scalars['String']>;
  heroImage?: Maybe<AssetUpdateOneInlineInput>;
  how?: Maybe<HowUpdateOneInlineInput>;
  intro?: Maybe<Scalars['String']>;
  smallImage?: Maybe<AssetUpdateOneInlineInput>;
  subhead?: Maybe<Scalars['String']>;
  theType?: Maybe<TheType>;
  what?: Maybe<WhatUpdateOneInlineInput>;
  where?: Maybe<WhereUpdateOneInlineInput>;
  who?: Maybe<WhoUpdateOneInlineInput>;
  why?: Maybe<WhyUpdateOneInlineInput>;
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
  head?: Maybe<Scalars['String']>;
  intro?: Maybe<Scalars['String']>;
  subhead?: Maybe<Scalars['String']>;
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
  how?: Maybe<HowWhereInput>;
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
  subhead?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  subhead_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  subhead_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subhead_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  subhead_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  subhead_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  subhead_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  subhead_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  subhead_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  subhead_starts_with?: Maybe<Scalars['String']>;
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
  what?: Maybe<WhatWhereInput>;
  where?: Maybe<WhereWhereInput>;
  who?: Maybe<WhoWhereInput>;
  why?: Maybe<WhyWhereInput>;
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
  /** Create one how */
  createHow?: Maybe<How>;
  /** Create one mindset */
  createMindset?: Maybe<Mindset>;
  /** Create one what */
  createWhat?: Maybe<What>;
  /** Create one where */
  createWhere?: Maybe<Where>;
  /** Create one who */
  createWho?: Maybe<Who>;
  /** Create one why */
  createWhy?: Maybe<Why>;
  /** Delete one activity from _all_ existing stages. Returns deleted document. */
  deleteActivity?: Maybe<Activity>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one how from _all_ existing stages. Returns deleted document. */
  deleteHow?: Maybe<How>;
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
   * Delete many How documents
   * @deprecated Please use the new paginated many mutation (deleteManyHowsConnection)
   */
  deleteManyHows: BatchPayload;
  /** Delete many How documents, return deleted documents */
  deleteManyHowsConnection: HowConnection;
  /**
   * Delete many Mindset documents
   * @deprecated Please use the new paginated many mutation (deleteManyMindsetsConnection)
   */
  deleteManyMindsets: BatchPayload;
  /** Delete many Mindset documents, return deleted documents */
  deleteManyMindsetsConnection: MindsetConnection;
  /**
   * Delete many What documents
   * @deprecated Please use the new paginated many mutation (deleteManyWhatsConnection)
   */
  deleteManyWhats: BatchPayload;
  /** Delete many What documents, return deleted documents */
  deleteManyWhatsConnection: WhatConnection;
  /**
   * Delete many Where documents
   * @deprecated Please use the new paginated many mutation (deleteManyWheresConnection)
   */
  deleteManyWheres: BatchPayload;
  /** Delete many Where documents, return deleted documents */
  deleteManyWheresConnection: WhereConnection;
  /**
   * Delete many Why documents
   * @deprecated Please use the new paginated many mutation (deleteManyWhiesConnection)
   */
  deleteManyWhies: BatchPayload;
  /** Delete many Why documents, return deleted documents */
  deleteManyWhiesConnection: WhyConnection;
  /**
   * Delete many Who documents
   * @deprecated Please use the new paginated many mutation (deleteManyWhosConnection)
   */
  deleteManyWhos: BatchPayload;
  /** Delete many Who documents, return deleted documents */
  deleteManyWhosConnection: WhoConnection;
  /** Delete one mindset from _all_ existing stages. Returns deleted document. */
  deleteMindset?: Maybe<Mindset>;
  /** Delete one what from _all_ existing stages. Returns deleted document. */
  deleteWhat?: Maybe<What>;
  /** Delete one where from _all_ existing stages. Returns deleted document. */
  deleteWhere?: Maybe<Where>;
  /** Delete one who from _all_ existing stages. Returns deleted document. */
  deleteWho?: Maybe<Who>;
  /** Delete one why from _all_ existing stages. Returns deleted document. */
  deleteWhy?: Maybe<Why>;
  /** Publish one activity */
  publishActivity?: Maybe<Activity>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one how */
  publishHow?: Maybe<How>;
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
   * Publish many How documents
   * @deprecated Please use the new paginated many mutation (publishManyHowsConnection)
   */
  publishManyHows: BatchPayload;
  /** Publish many How documents */
  publishManyHowsConnection: HowConnection;
  /**
   * Publish many Mindset documents
   * @deprecated Please use the new paginated many mutation (publishManyMindsetsConnection)
   */
  publishManyMindsets: BatchPayload;
  /** Publish many Mindset documents */
  publishManyMindsetsConnection: MindsetConnection;
  /**
   * Publish many What documents
   * @deprecated Please use the new paginated many mutation (publishManyWhatsConnection)
   */
  publishManyWhats: BatchPayload;
  /** Publish many What documents */
  publishManyWhatsConnection: WhatConnection;
  /**
   * Publish many Where documents
   * @deprecated Please use the new paginated many mutation (publishManyWheresConnection)
   */
  publishManyWheres: BatchPayload;
  /** Publish many Where documents */
  publishManyWheresConnection: WhereConnection;
  /**
   * Publish many Why documents
   * @deprecated Please use the new paginated many mutation (publishManyWhiesConnection)
   */
  publishManyWhies: BatchPayload;
  /** Publish many Why documents */
  publishManyWhiesConnection: WhyConnection;
  /**
   * Publish many Who documents
   * @deprecated Please use the new paginated many mutation (publishManyWhosConnection)
   */
  publishManyWhos: BatchPayload;
  /** Publish many Who documents */
  publishManyWhosConnection: WhoConnection;
  /** Publish one mindset */
  publishMindset?: Maybe<Mindset>;
  /** Publish one what */
  publishWhat?: Maybe<What>;
  /** Publish one where */
  publishWhere?: Maybe<Where>;
  /** Publish one who */
  publishWho?: Maybe<Who>;
  /** Publish one why */
  publishWhy?: Maybe<Why>;
  /** Unpublish one activity from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishActivity?: Maybe<Activity>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one how from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishHow?: Maybe<How>;
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
   * Unpublish many How documents
   * @deprecated Please use the new paginated many mutation (unpublishManyHowsConnection)
   */
  unpublishManyHows: BatchPayload;
  /** Find many How documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyHowsConnection: HowConnection;
  /**
   * Unpublish many Mindset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyMindsetsConnection)
   */
  unpublishManyMindsets: BatchPayload;
  /** Find many Mindset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyMindsetsConnection: MindsetConnection;
  /**
   * Unpublish many What documents
   * @deprecated Please use the new paginated many mutation (unpublishManyWhatsConnection)
   */
  unpublishManyWhats: BatchPayload;
  /** Find many What documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyWhatsConnection: WhatConnection;
  /**
   * Unpublish many Where documents
   * @deprecated Please use the new paginated many mutation (unpublishManyWheresConnection)
   */
  unpublishManyWheres: BatchPayload;
  /** Find many Where documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyWheresConnection: WhereConnection;
  /**
   * Unpublish many Why documents
   * @deprecated Please use the new paginated many mutation (unpublishManyWhiesConnection)
   */
  unpublishManyWhies: BatchPayload;
  /** Find many Why documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyWhiesConnection: WhyConnection;
  /**
   * Unpublish many Who documents
   * @deprecated Please use the new paginated many mutation (unpublishManyWhosConnection)
   */
  unpublishManyWhos: BatchPayload;
  /** Find many Who documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyWhosConnection: WhoConnection;
  /** Unpublish one mindset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishMindset?: Maybe<Mindset>;
  /** Unpublish one what from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishWhat?: Maybe<What>;
  /** Unpublish one where from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishWhere?: Maybe<Where>;
  /** Unpublish one who from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishWho?: Maybe<Who>;
  /** Unpublish one why from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishWhy?: Maybe<Why>;
  /** Update one activity */
  updateActivity?: Maybe<Activity>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one how */
  updateHow?: Maybe<How>;
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
   * Update many hows
   * @deprecated Please use the new paginated many mutation (updateManyHowsConnection)
   */
  updateManyHows: BatchPayload;
  /** Update many How documents */
  updateManyHowsConnection: HowConnection;
  /**
   * Update many mindsets
   * @deprecated Please use the new paginated many mutation (updateManyMindsetsConnection)
   */
  updateManyMindsets: BatchPayload;
  /** Update many Mindset documents */
  updateManyMindsetsConnection: MindsetConnection;
  /**
   * Update many whats
   * @deprecated Please use the new paginated many mutation (updateManyWhatsConnection)
   */
  updateManyWhats: BatchPayload;
  /** Update many What documents */
  updateManyWhatsConnection: WhatConnection;
  /**
   * Update many wheres
   * @deprecated Please use the new paginated many mutation (updateManyWheresConnection)
   */
  updateManyWheres: BatchPayload;
  /** Update many Where documents */
  updateManyWheresConnection: WhereConnection;
  /**
   * Update many whies
   * @deprecated Please use the new paginated many mutation (updateManyWhiesConnection)
   */
  updateManyWhies: BatchPayload;
  /** Update many Why documents */
  updateManyWhiesConnection: WhyConnection;
  /**
   * Update many whos
   * @deprecated Please use the new paginated many mutation (updateManyWhosConnection)
   */
  updateManyWhos: BatchPayload;
  /** Update many Who documents */
  updateManyWhosConnection: WhoConnection;
  /** Update one mindset */
  updateMindset?: Maybe<Mindset>;
  /** Update one what */
  updateWhat?: Maybe<What>;
  /** Update one where */
  updateWhere?: Maybe<Where>;
  /** Update one who */
  updateWho?: Maybe<Who>;
  /** Update one why */
  updateWhy?: Maybe<Why>;
  /** Upsert one activity */
  upsertActivity?: Maybe<Activity>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one how */
  upsertHow?: Maybe<How>;
  /** Upsert one mindset */
  upsertMindset?: Maybe<Mindset>;
  /** Upsert one what */
  upsertWhat?: Maybe<What>;
  /** Upsert one where */
  upsertWhere?: Maybe<Where>;
  /** Upsert one who */
  upsertWho?: Maybe<Who>;
  /** Upsert one why */
  upsertWhy?: Maybe<Why>;
};


export type MutationCreateActivityArgs = {
  data: ActivityCreateInput;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateHowArgs = {
  data: HowCreateInput;
};


export type MutationCreateMindsetArgs = {
  data: MindsetCreateInput;
};


export type MutationCreateWhatArgs = {
  data: WhatCreateInput;
};


export type MutationCreateWhereArgs = {
  data: WhereCreateInput;
};


export type MutationCreateWhoArgs = {
  data: WhoCreateInput;
};


export type MutationCreateWhyArgs = {
  data: WhyCreateInput;
};


export type MutationDeleteActivityArgs = {
  where: ActivityWhereUniqueInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteHowArgs = {
  where: HowWhereUniqueInput;
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


export type MutationDeleteManyHowsArgs = {
  where?: Maybe<HowManyWhereInput>;
};


export type MutationDeleteManyHowsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<HowManyWhereInput>;
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


export type MutationDeleteManyWhatsArgs = {
  where?: Maybe<WhatManyWhereInput>;
};


export type MutationDeleteManyWhatsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<WhatManyWhereInput>;
};


export type MutationDeleteManyWheresArgs = {
  where?: Maybe<WhereManyWhereInput>;
};


export type MutationDeleteManyWheresConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<WhereManyWhereInput>;
};


export type MutationDeleteManyWhiesArgs = {
  where?: Maybe<WhyManyWhereInput>;
};


export type MutationDeleteManyWhiesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<WhyManyWhereInput>;
};


export type MutationDeleteManyWhosArgs = {
  where?: Maybe<WhoManyWhereInput>;
};


export type MutationDeleteManyWhosConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<WhoManyWhereInput>;
};


export type MutationDeleteMindsetArgs = {
  where: MindsetWhereUniqueInput;
};


export type MutationDeleteWhatArgs = {
  where: WhatWhereUniqueInput;
};


export type MutationDeleteWhereArgs = {
  where: WhereWhereUniqueInput;
};


export type MutationDeleteWhoArgs = {
  where: WhoWhereUniqueInput;
};


export type MutationDeleteWhyArgs = {
  where: WhyWhereUniqueInput;
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


export type MutationPublishHowArgs = {
  to?: Array<Stage>;
  where: HowWhereUniqueInput;
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


export type MutationPublishManyHowsArgs = {
  to?: Array<Stage>;
  where?: Maybe<HowManyWhereInput>;
};


export type MutationPublishManyHowsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<HowManyWhereInput>;
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


export type MutationPublishManyWhatsArgs = {
  to?: Array<Stage>;
  where?: Maybe<WhatManyWhereInput>;
};


export type MutationPublishManyWhatsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<WhatManyWhereInput>;
};


export type MutationPublishManyWheresArgs = {
  to?: Array<Stage>;
  where?: Maybe<WhereManyWhereInput>;
};


export type MutationPublishManyWheresConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<WhereManyWhereInput>;
};


export type MutationPublishManyWhiesArgs = {
  to?: Array<Stage>;
  where?: Maybe<WhyManyWhereInput>;
};


export type MutationPublishManyWhiesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<WhyManyWhereInput>;
};


export type MutationPublishManyWhosArgs = {
  to?: Array<Stage>;
  where?: Maybe<WhoManyWhereInput>;
};


export type MutationPublishManyWhosConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<WhoManyWhereInput>;
};


export type MutationPublishMindsetArgs = {
  to?: Array<Stage>;
  where: MindsetWhereUniqueInput;
};


export type MutationPublishWhatArgs = {
  to?: Array<Stage>;
  where: WhatWhereUniqueInput;
};


export type MutationPublishWhereArgs = {
  to?: Array<Stage>;
  where: WhereWhereUniqueInput;
};


export type MutationPublishWhoArgs = {
  to?: Array<Stage>;
  where: WhoWhereUniqueInput;
};


export type MutationPublishWhyArgs = {
  to?: Array<Stage>;
  where: WhyWhereUniqueInput;
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


export type MutationUnpublishHowArgs = {
  from?: Array<Stage>;
  where: HowWhereUniqueInput;
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


export type MutationUnpublishManyHowsArgs = {
  from?: Array<Stage>;
  where?: Maybe<HowManyWhereInput>;
};


export type MutationUnpublishManyHowsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<HowManyWhereInput>;
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


export type MutationUnpublishManyWhatsArgs = {
  from?: Array<Stage>;
  where?: Maybe<WhatManyWhereInput>;
};


export type MutationUnpublishManyWhatsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<WhatManyWhereInput>;
};


export type MutationUnpublishManyWheresArgs = {
  from?: Array<Stage>;
  where?: Maybe<WhereManyWhereInput>;
};


export type MutationUnpublishManyWheresConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<WhereManyWhereInput>;
};


export type MutationUnpublishManyWhiesArgs = {
  from?: Array<Stage>;
  where?: Maybe<WhyManyWhereInput>;
};


export type MutationUnpublishManyWhiesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<WhyManyWhereInput>;
};


export type MutationUnpublishManyWhosArgs = {
  from?: Array<Stage>;
  where?: Maybe<WhoManyWhereInput>;
};


export type MutationUnpublishManyWhosConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<WhoManyWhereInput>;
};


export type MutationUnpublishMindsetArgs = {
  from?: Array<Stage>;
  where: MindsetWhereUniqueInput;
};


export type MutationUnpublishWhatArgs = {
  from?: Array<Stage>;
  where: WhatWhereUniqueInput;
};


export type MutationUnpublishWhereArgs = {
  from?: Array<Stage>;
  where: WhereWhereUniqueInput;
};


export type MutationUnpublishWhoArgs = {
  from?: Array<Stage>;
  where: WhoWhereUniqueInput;
};


export type MutationUnpublishWhyArgs = {
  from?: Array<Stage>;
  where: WhyWhereUniqueInput;
};


export type MutationUpdateActivityArgs = {
  data: ActivityUpdateInput;
  where: ActivityWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateHowArgs = {
  data: HowUpdateInput;
  where: HowWhereUniqueInput;
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


export type MutationUpdateManyHowsArgs = {
  data: HowUpdateManyInput;
  where?: Maybe<HowManyWhereInput>;
};


export type MutationUpdateManyHowsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: HowUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<HowManyWhereInput>;
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


export type MutationUpdateManyWhatsArgs = {
  data: WhatUpdateManyInput;
  where?: Maybe<WhatManyWhereInput>;
};


export type MutationUpdateManyWhatsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: WhatUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<WhatManyWhereInput>;
};


export type MutationUpdateManyWheresArgs = {
  data: WhereUpdateManyInput;
  where?: Maybe<WhereManyWhereInput>;
};


export type MutationUpdateManyWheresConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: WhereUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<WhereManyWhereInput>;
};


export type MutationUpdateManyWhiesArgs = {
  data: WhyUpdateManyInput;
  where?: Maybe<WhyManyWhereInput>;
};


export type MutationUpdateManyWhiesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: WhyUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<WhyManyWhereInput>;
};


export type MutationUpdateManyWhosArgs = {
  data: WhoUpdateManyInput;
  where?: Maybe<WhoManyWhereInput>;
};


export type MutationUpdateManyWhosConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: WhoUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<WhoManyWhereInput>;
};


export type MutationUpdateMindsetArgs = {
  data: MindsetUpdateInput;
  where: MindsetWhereUniqueInput;
};


export type MutationUpdateWhatArgs = {
  data: WhatUpdateInput;
  where: WhatWhereUniqueInput;
};


export type MutationUpdateWhereArgs = {
  data: WhereUpdateInput;
  where: WhereWhereUniqueInput;
};


export type MutationUpdateWhoArgs = {
  data: WhoUpdateInput;
  where: WhoWhereUniqueInput;
};


export type MutationUpdateWhyArgs = {
  data: WhyUpdateInput;
  where: WhyWhereUniqueInput;
};


export type MutationUpsertActivityArgs = {
  upsert: ActivityUpsertInput;
  where: ActivityWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertHowArgs = {
  upsert: HowUpsertInput;
  where: HowWhereUniqueInput;
};


export type MutationUpsertMindsetArgs = {
  upsert: MindsetUpsertInput;
  where: MindsetWhereUniqueInput;
};


export type MutationUpsertWhatArgs = {
  upsert: WhatUpsertInput;
  where: WhatWhereUniqueInput;
};


export type MutationUpsertWhereArgs = {
  upsert: WhereUpsertInput;
  where: WhereWhereUniqueInput;
};


export type MutationUpsertWhoArgs = {
  upsert: WhoUpsertInput;
  where: WhoWhereUniqueInput;
};


export type MutationUpsertWhyArgs = {
  upsert: WhyUpsertInput;
  where: WhyWhereUniqueInput;
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
  /** Retrieve a single how */
  how?: Maybe<How>;
  /** Retrieve document version */
  howVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple hows */
  hows: Array<How>;
  /** Retrieve multiple hows using the Relay connection interface */
  howsConnection: HowConnection;
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
  /** Retrieve a single what */
  what?: Maybe<What>;
  /** Retrieve document version */
  whatVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple whats */
  whats: Array<What>;
  /** Retrieve multiple whats using the Relay connection interface */
  whatsConnection: WhatConnection;
  /** Retrieve a single where */
  where?: Maybe<Where>;
  /** Retrieve document version */
  whereVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple wheres */
  wheres: Array<Where>;
  /** Retrieve multiple wheres using the Relay connection interface */
  wheresConnection: WhereConnection;
  /** Retrieve multiple whies */
  whies: Array<Why>;
  /** Retrieve multiple whies using the Relay connection interface */
  whiesConnection: WhyConnection;
  /** Retrieve a single who */
  who?: Maybe<Who>;
  /** Retrieve document version */
  whoVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple whos */
  whos: Array<Who>;
  /** Retrieve multiple whos using the Relay connection interface */
  whosConnection: WhoConnection;
  /** Retrieve a single why */
  why?: Maybe<Why>;
  /** Retrieve document version */
  whyVersion?: Maybe<DocumentVersion>;
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


export type QueryHowArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: HowWhereUniqueInput;
};


export type QueryHowVersionArgs = {
  where: VersionWhereInput;
};


export type QueryHowsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<HowOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<HowWhereInput>;
};


export type QueryHowsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<HowOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<HowWhereInput>;
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


export type QueryWhatArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: WhatWhereUniqueInput;
};


export type QueryWhatVersionArgs = {
  where: VersionWhereInput;
};


export type QueryWhatsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<WhatOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<WhatWhereInput>;
};


export type QueryWhatsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<WhatOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<WhatWhereInput>;
};


export type QueryWhereArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: WhereWhereUniqueInput;
};


export type QueryWhereVersionArgs = {
  where: VersionWhereInput;
};


export type QueryWheresArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<WhereOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<WhereWhereInput>;
};


export type QueryWheresConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<WhereOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<WhereWhereInput>;
};


export type QueryWhiesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<WhyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<WhyWhereInput>;
};


export type QueryWhiesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<WhyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<WhyWhereInput>;
};


export type QueryWhoArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: WhoWhereUniqueInput;
};


export type QueryWhoVersionArgs = {
  where: VersionWhereInput;
};


export type QueryWhosArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<WhoOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<WhoWhereInput>;
};


export type QueryWhosConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<WhoOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<WhoWhereInput>;
};


export type QueryWhyArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: WhyWhereUniqueInput;
};


export type QueryWhyVersionArgs = {
  where: VersionWhereInput;
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

export type What = Node & {
  __typename?: 'What';
  body?: Maybe<RichText>;
  boxout?: Maybe<Scalars['String']>;
  boxoutTitle?: Maybe<Scalars['String']>;
  byTheNumbers?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<What>;
  /** List of What versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  intro?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  quote: Array<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type WhatCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type WhatDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type WhatHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type WhatPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type WhatUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type WhatConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: WhatWhereUniqueInput;
};

/** A connection to a list of items. */
export type WhatConnection = {
  __typename?: 'WhatConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<WhatEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type WhatCreateInput = {
  body?: Maybe<Scalars['RichTextAST']>;
  boxout?: Maybe<Scalars['String']>;
  boxoutTitle?: Maybe<Scalars['String']>;
  byTheNumbers?: Maybe<Scalars['String']>;
  ckursnm7d0ewj01wh6cjp73u0?: Maybe<MindsetCreateManyInlineInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  intro?: Maybe<Scalars['String']>;
  quote?: Maybe<Array<Scalars['String']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WhatCreateManyInlineInput = {
  /** Connect multiple existing What documents */
  connect?: Maybe<Array<WhatWhereUniqueInput>>;
  /** Create and connect multiple existing What documents */
  create?: Maybe<Array<WhatCreateInput>>;
};

export type WhatCreateOneInlineInput = {
  /** Connect one existing What document */
  connect?: Maybe<WhatWhereUniqueInput>;
  /** Create and connect one What document */
  create?: Maybe<WhatCreateInput>;
};

/** An edge in a connection. */
export type WhatEdge = {
  __typename?: 'WhatEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: What;
};

/** Identifies documents */
export type WhatManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<WhatWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<WhatWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<WhatWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  boxout?: Maybe<Scalars['String']>;
  boxoutTitle?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  boxoutTitle_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  boxoutTitle_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  boxoutTitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  boxoutTitle_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  boxoutTitle_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  boxoutTitle_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  boxoutTitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  boxoutTitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  boxoutTitle_starts_with?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  boxout_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  boxout_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  boxout_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  boxout_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  boxout_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  boxout_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  boxout_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  boxout_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  boxout_starts_with?: Maybe<Scalars['String']>;
  byTheNumbers?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  byTheNumbers_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  byTheNumbers_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  byTheNumbers_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  byTheNumbers_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  byTheNumbers_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  byTheNumbers_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  byTheNumbers_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  byTheNumbers_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  byTheNumbers_starts_with?: Maybe<Scalars['String']>;
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
  quote?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  quote_contains_all?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  quote_contains_none?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  quote_contains_some?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  quote_not?: Maybe<Array<Scalars['String']>>;
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

export enum WhatOrderByInput {
  BoxoutTitleAsc = 'boxoutTitle_ASC',
  BoxoutTitleDesc = 'boxoutTitle_DESC',
  BoxoutAsc = 'boxout_ASC',
  BoxoutDesc = 'boxout_DESC',
  ByTheNumbersAsc = 'byTheNumbers_ASC',
  ByTheNumbersDesc = 'byTheNumbers_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IntroAsc = 'intro_ASC',
  IntroDesc = 'intro_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  QuoteAsc = 'quote_ASC',
  QuoteDesc = 'quote_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type WhatUpdateInput = {
  body?: Maybe<Scalars['RichTextAST']>;
  boxout?: Maybe<Scalars['String']>;
  boxoutTitle?: Maybe<Scalars['String']>;
  byTheNumbers?: Maybe<Scalars['String']>;
  ckursnm7d0ewj01wh6cjp73u0?: Maybe<MindsetUpdateManyInlineInput>;
  intro?: Maybe<Scalars['String']>;
  quote?: Maybe<Array<Scalars['String']>>;
};

export type WhatUpdateManyInlineInput = {
  /** Connect multiple existing What documents */
  connect?: Maybe<Array<WhatConnectInput>>;
  /** Create and connect multiple What documents */
  create?: Maybe<Array<WhatCreateInput>>;
  /** Delete multiple What documents */
  delete?: Maybe<Array<WhatWhereUniqueInput>>;
  /** Disconnect multiple What documents */
  disconnect?: Maybe<Array<WhatWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing What documents */
  set?: Maybe<Array<WhatWhereUniqueInput>>;
  /** Update multiple What documents */
  update?: Maybe<Array<WhatUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple What documents */
  upsert?: Maybe<Array<WhatUpsertWithNestedWhereUniqueInput>>;
};

export type WhatUpdateManyInput = {
  body?: Maybe<Scalars['RichTextAST']>;
  boxout?: Maybe<Scalars['String']>;
  boxoutTitle?: Maybe<Scalars['String']>;
  byTheNumbers?: Maybe<Scalars['String']>;
  intro?: Maybe<Scalars['String']>;
  quote?: Maybe<Array<Scalars['String']>>;
};

export type WhatUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: WhatUpdateManyInput;
  /** Document search */
  where: WhatWhereInput;
};

export type WhatUpdateOneInlineInput = {
  /** Connect existing What document */
  connect?: Maybe<WhatWhereUniqueInput>;
  /** Create and connect one What document */
  create?: Maybe<WhatCreateInput>;
  /** Delete currently connected What document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected What document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single What document */
  update?: Maybe<WhatUpdateWithNestedWhereUniqueInput>;
  /** Upsert single What document */
  upsert?: Maybe<WhatUpsertWithNestedWhereUniqueInput>;
};

export type WhatUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: WhatUpdateInput;
  /** Unique document search */
  where: WhatWhereUniqueInput;
};

export type WhatUpsertInput = {
  /** Create document if it didn't exist */
  create: WhatCreateInput;
  /** Update document if it exists */
  update: WhatUpdateInput;
};

export type WhatUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: WhatUpsertInput;
  /** Unique document search */
  where: WhatWhereUniqueInput;
};

/** Identifies documents */
export type WhatWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<WhatWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<WhatWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<WhatWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  boxout?: Maybe<Scalars['String']>;
  boxoutTitle?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  boxoutTitle_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  boxoutTitle_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  boxoutTitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  boxoutTitle_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  boxoutTitle_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  boxoutTitle_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  boxoutTitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  boxoutTitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  boxoutTitle_starts_with?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  boxout_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  boxout_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  boxout_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  boxout_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  boxout_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  boxout_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  boxout_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  boxout_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  boxout_starts_with?: Maybe<Scalars['String']>;
  byTheNumbers?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  byTheNumbers_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  byTheNumbers_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  byTheNumbers_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  byTheNumbers_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  byTheNumbers_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  byTheNumbers_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  byTheNumbers_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  byTheNumbers_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  byTheNumbers_starts_with?: Maybe<Scalars['String']>;
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
  quote?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  quote_contains_all?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  quote_contains_none?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  quote_contains_some?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  quote_not?: Maybe<Array<Scalars['String']>>;
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

/** References What record uniquely */
export type WhatWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Where = Node & {
  __typename?: 'Where';
  body?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Where>;
  /** List of Where versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  intro?: Maybe<Scalars['String']>;
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


export type WhereCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type WhereDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type WhereHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type WherePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type WhereUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type WhereConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: WhereWhereUniqueInput;
};

/** A connection to a list of items. */
export type WhereConnection = {
  __typename?: 'WhereConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<WhereEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type WhereCreateInput = {
  body?: Maybe<Scalars['String']>;
  ckursnze00f1901z73vk32pw7?: Maybe<MindsetCreateManyInlineInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  intro?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WhereCreateManyInlineInput = {
  /** Connect multiple existing Where documents */
  connect?: Maybe<Array<WhereWhereUniqueInput>>;
  /** Create and connect multiple existing Where documents */
  create?: Maybe<Array<WhereCreateInput>>;
};

export type WhereCreateOneInlineInput = {
  /** Connect one existing Where document */
  connect?: Maybe<WhereWhereUniqueInput>;
  /** Create and connect one Where document */
  create?: Maybe<WhereCreateInput>;
};

/** An edge in a connection. */
export type WhereEdge = {
  __typename?: 'WhereEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Where;
};

/** Identifies documents */
export type WhereManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<WhereWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<WhereWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<WhereWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  body_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  body_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  body_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  body_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  body_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  body_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  body_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  body_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  body_starts_with?: Maybe<Scalars['String']>;
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

export enum WhereOrderByInput {
  BodyAsc = 'body_ASC',
  BodyDesc = 'body_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IntroAsc = 'intro_ASC',
  IntroDesc = 'intro_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type WhereUpdateInput = {
  body?: Maybe<Scalars['String']>;
  ckursnze00f1901z73vk32pw7?: Maybe<MindsetUpdateManyInlineInput>;
  intro?: Maybe<Scalars['String']>;
};

export type WhereUpdateManyInlineInput = {
  /** Connect multiple existing Where documents */
  connect?: Maybe<Array<WhereConnectInput>>;
  /** Create and connect multiple Where documents */
  create?: Maybe<Array<WhereCreateInput>>;
  /** Delete multiple Where documents */
  delete?: Maybe<Array<WhereWhereUniqueInput>>;
  /** Disconnect multiple Where documents */
  disconnect?: Maybe<Array<WhereWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Where documents */
  set?: Maybe<Array<WhereWhereUniqueInput>>;
  /** Update multiple Where documents */
  update?: Maybe<Array<WhereUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Where documents */
  upsert?: Maybe<Array<WhereUpsertWithNestedWhereUniqueInput>>;
};

export type WhereUpdateManyInput = {
  body?: Maybe<Scalars['String']>;
  intro?: Maybe<Scalars['String']>;
};

export type WhereUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: WhereUpdateManyInput;
  /** Document search */
  where: WhereWhereInput;
};

export type WhereUpdateOneInlineInput = {
  /** Connect existing Where document */
  connect?: Maybe<WhereWhereUniqueInput>;
  /** Create and connect one Where document */
  create?: Maybe<WhereCreateInput>;
  /** Delete currently connected Where document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Where document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Where document */
  update?: Maybe<WhereUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Where document */
  upsert?: Maybe<WhereUpsertWithNestedWhereUniqueInput>;
};

export type WhereUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: WhereUpdateInput;
  /** Unique document search */
  where: WhereWhereUniqueInput;
};

export type WhereUpsertInput = {
  /** Create document if it didn't exist */
  create: WhereCreateInput;
  /** Update document if it exists */
  update: WhereUpdateInput;
};

export type WhereUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: WhereUpsertInput;
  /** Unique document search */
  where: WhereWhereUniqueInput;
};

/** Identifies documents */
export type WhereWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<WhereWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<WhereWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<WhereWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  body_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  body_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  body_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  body_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  body_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  body_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  body_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  body_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  body_starts_with?: Maybe<Scalars['String']>;
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

/** References Where record uniquely */
export type WhereWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Who = Node & {
  __typename?: 'Who';
  body?: Maybe<RichText>;
  boxout?: Maybe<Scalars['String']>;
  boxoutTitle?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Who>;
  /** List of Who versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  intro?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  quote?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type WhoCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type WhoDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type WhoHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type WhoPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type WhoUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type WhoConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: WhoWhereUniqueInput;
};

/** A connection to a list of items. */
export type WhoConnection = {
  __typename?: 'WhoConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<WhoEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type WhoCreateInput = {
  body?: Maybe<Scalars['RichTextAST']>;
  boxout?: Maybe<Scalars['String']>;
  boxoutTitle?: Maybe<Scalars['String']>;
  ckursmr1a0etf01y2hztf1ji2?: Maybe<MindsetCreateManyInlineInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  intro?: Maybe<Scalars['String']>;
  quote?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WhoCreateManyInlineInput = {
  /** Connect multiple existing Who documents */
  connect?: Maybe<Array<WhoWhereUniqueInput>>;
  /** Create and connect multiple existing Who documents */
  create?: Maybe<Array<WhoCreateInput>>;
};

export type WhoCreateOneInlineInput = {
  /** Connect one existing Who document */
  connect?: Maybe<WhoWhereUniqueInput>;
  /** Create and connect one Who document */
  create?: Maybe<WhoCreateInput>;
};

/** An edge in a connection. */
export type WhoEdge = {
  __typename?: 'WhoEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Who;
};

/** Identifies documents */
export type WhoManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<WhoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<WhoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<WhoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  boxout?: Maybe<Scalars['String']>;
  boxoutTitle?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  boxoutTitle_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  boxoutTitle_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  boxoutTitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  boxoutTitle_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  boxoutTitle_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  boxoutTitle_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  boxoutTitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  boxoutTitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  boxoutTitle_starts_with?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  boxout_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  boxout_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  boxout_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  boxout_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  boxout_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  boxout_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  boxout_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  boxout_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  boxout_starts_with?: Maybe<Scalars['String']>;
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
  quote?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  quote_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  quote_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  quote_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  quote_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  quote_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  quote_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  quote_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  quote_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  quote_starts_with?: Maybe<Scalars['String']>;
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

export enum WhoOrderByInput {
  BoxoutTitleAsc = 'boxoutTitle_ASC',
  BoxoutTitleDesc = 'boxoutTitle_DESC',
  BoxoutAsc = 'boxout_ASC',
  BoxoutDesc = 'boxout_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IntroAsc = 'intro_ASC',
  IntroDesc = 'intro_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  QuoteAsc = 'quote_ASC',
  QuoteDesc = 'quote_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type WhoUpdateInput = {
  body?: Maybe<Scalars['RichTextAST']>;
  boxout?: Maybe<Scalars['String']>;
  boxoutTitle?: Maybe<Scalars['String']>;
  ckursmr1a0etf01y2hztf1ji2?: Maybe<MindsetUpdateManyInlineInput>;
  intro?: Maybe<Scalars['String']>;
  quote?: Maybe<Scalars['String']>;
};

export type WhoUpdateManyInlineInput = {
  /** Connect multiple existing Who documents */
  connect?: Maybe<Array<WhoConnectInput>>;
  /** Create and connect multiple Who documents */
  create?: Maybe<Array<WhoCreateInput>>;
  /** Delete multiple Who documents */
  delete?: Maybe<Array<WhoWhereUniqueInput>>;
  /** Disconnect multiple Who documents */
  disconnect?: Maybe<Array<WhoWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Who documents */
  set?: Maybe<Array<WhoWhereUniqueInput>>;
  /** Update multiple Who documents */
  update?: Maybe<Array<WhoUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Who documents */
  upsert?: Maybe<Array<WhoUpsertWithNestedWhereUniqueInput>>;
};

export type WhoUpdateManyInput = {
  body?: Maybe<Scalars['RichTextAST']>;
  boxout?: Maybe<Scalars['String']>;
  boxoutTitle?: Maybe<Scalars['String']>;
  intro?: Maybe<Scalars['String']>;
  quote?: Maybe<Scalars['String']>;
};

export type WhoUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: WhoUpdateManyInput;
  /** Document search */
  where: WhoWhereInput;
};

export type WhoUpdateOneInlineInput = {
  /** Connect existing Who document */
  connect?: Maybe<WhoWhereUniqueInput>;
  /** Create and connect one Who document */
  create?: Maybe<WhoCreateInput>;
  /** Delete currently connected Who document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Who document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Who document */
  update?: Maybe<WhoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Who document */
  upsert?: Maybe<WhoUpsertWithNestedWhereUniqueInput>;
};

export type WhoUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: WhoUpdateInput;
  /** Unique document search */
  where: WhoWhereUniqueInput;
};

export type WhoUpsertInput = {
  /** Create document if it didn't exist */
  create: WhoCreateInput;
  /** Update document if it exists */
  update: WhoUpdateInput;
};

export type WhoUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: WhoUpsertInput;
  /** Unique document search */
  where: WhoWhereUniqueInput;
};

/** Identifies documents */
export type WhoWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<WhoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<WhoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<WhoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  boxout?: Maybe<Scalars['String']>;
  boxoutTitle?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  boxoutTitle_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  boxoutTitle_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  boxoutTitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  boxoutTitle_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  boxoutTitle_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  boxoutTitle_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  boxoutTitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  boxoutTitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  boxoutTitle_starts_with?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  boxout_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  boxout_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  boxout_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  boxout_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  boxout_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  boxout_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  boxout_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  boxout_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  boxout_starts_with?: Maybe<Scalars['String']>;
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
  quote?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  quote_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  quote_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  quote_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  quote_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  quote_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  quote_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  quote_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  quote_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  quote_starts_with?: Maybe<Scalars['String']>;
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

/** References Who record uniquely */
export type WhoWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Why = Node & {
  __typename?: 'Why';
  body?: Maybe<RichText>;
  boxout?: Maybe<Scalars['String']>;
  boxoutTitle?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Why>;
  /** List of Why versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  intro?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  quote?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type WhyCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type WhyDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type WhyHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type WhyPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type WhyUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type WhyConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: WhyWhereUniqueInput;
};

/** A connection to a list of items. */
export type WhyConnection = {
  __typename?: 'WhyConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<WhyEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type WhyCreateInput = {
  body?: Maybe<Scalars['RichTextAST']>;
  boxout?: Maybe<Scalars['String']>;
  boxoutTitle?: Maybe<Scalars['String']>;
  ckursn0as0ew301whgz3c0f3w?: Maybe<MindsetCreateManyInlineInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  intro?: Maybe<Scalars['String']>;
  quote?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WhyCreateManyInlineInput = {
  /** Connect multiple existing Why documents */
  connect?: Maybe<Array<WhyWhereUniqueInput>>;
  /** Create and connect multiple existing Why documents */
  create?: Maybe<Array<WhyCreateInput>>;
};

export type WhyCreateOneInlineInput = {
  /** Connect one existing Why document */
  connect?: Maybe<WhyWhereUniqueInput>;
  /** Create and connect one Why document */
  create?: Maybe<WhyCreateInput>;
};

/** An edge in a connection. */
export type WhyEdge = {
  __typename?: 'WhyEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Why;
};

/** Identifies documents */
export type WhyManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<WhyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<WhyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<WhyWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  boxout?: Maybe<Scalars['String']>;
  boxoutTitle?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  boxoutTitle_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  boxoutTitle_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  boxoutTitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  boxoutTitle_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  boxoutTitle_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  boxoutTitle_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  boxoutTitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  boxoutTitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  boxoutTitle_starts_with?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  boxout_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  boxout_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  boxout_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  boxout_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  boxout_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  boxout_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  boxout_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  boxout_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  boxout_starts_with?: Maybe<Scalars['String']>;
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
  quote?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  quote_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  quote_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  quote_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  quote_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  quote_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  quote_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  quote_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  quote_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  quote_starts_with?: Maybe<Scalars['String']>;
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

export enum WhyOrderByInput {
  BoxoutTitleAsc = 'boxoutTitle_ASC',
  BoxoutTitleDesc = 'boxoutTitle_DESC',
  BoxoutAsc = 'boxout_ASC',
  BoxoutDesc = 'boxout_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IntroAsc = 'intro_ASC',
  IntroDesc = 'intro_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  QuoteAsc = 'quote_ASC',
  QuoteDesc = 'quote_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type WhyUpdateInput = {
  body?: Maybe<Scalars['RichTextAST']>;
  boxout?: Maybe<Scalars['String']>;
  boxoutTitle?: Maybe<Scalars['String']>;
  ckursn0as0ew301whgz3c0f3w?: Maybe<MindsetUpdateManyInlineInput>;
  intro?: Maybe<Scalars['String']>;
  quote?: Maybe<Scalars['String']>;
};

export type WhyUpdateManyInlineInput = {
  /** Connect multiple existing Why documents */
  connect?: Maybe<Array<WhyConnectInput>>;
  /** Create and connect multiple Why documents */
  create?: Maybe<Array<WhyCreateInput>>;
  /** Delete multiple Why documents */
  delete?: Maybe<Array<WhyWhereUniqueInput>>;
  /** Disconnect multiple Why documents */
  disconnect?: Maybe<Array<WhyWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Why documents */
  set?: Maybe<Array<WhyWhereUniqueInput>>;
  /** Update multiple Why documents */
  update?: Maybe<Array<WhyUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Why documents */
  upsert?: Maybe<Array<WhyUpsertWithNestedWhereUniqueInput>>;
};

export type WhyUpdateManyInput = {
  body?: Maybe<Scalars['RichTextAST']>;
  boxout?: Maybe<Scalars['String']>;
  boxoutTitle?: Maybe<Scalars['String']>;
  intro?: Maybe<Scalars['String']>;
  quote?: Maybe<Scalars['String']>;
};

export type WhyUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: WhyUpdateManyInput;
  /** Document search */
  where: WhyWhereInput;
};

export type WhyUpdateOneInlineInput = {
  /** Connect existing Why document */
  connect?: Maybe<WhyWhereUniqueInput>;
  /** Create and connect one Why document */
  create?: Maybe<WhyCreateInput>;
  /** Delete currently connected Why document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Why document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Why document */
  update?: Maybe<WhyUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Why document */
  upsert?: Maybe<WhyUpsertWithNestedWhereUniqueInput>;
};

export type WhyUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: WhyUpdateInput;
  /** Unique document search */
  where: WhyWhereUniqueInput;
};

export type WhyUpsertInput = {
  /** Create document if it didn't exist */
  create: WhyCreateInput;
  /** Update document if it exists */
  update: WhyUpdateInput;
};

export type WhyUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: WhyUpsertInput;
  /** Unique document search */
  where: WhyWhereUniqueInput;
};

/** Identifies documents */
export type WhyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<WhyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<WhyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<WhyWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  boxout?: Maybe<Scalars['String']>;
  boxoutTitle?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  boxoutTitle_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  boxoutTitle_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  boxoutTitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  boxoutTitle_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  boxoutTitle_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  boxoutTitle_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  boxoutTitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  boxoutTitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  boxoutTitle_starts_with?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  boxout_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  boxout_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  boxout_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  boxout_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  boxout_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  boxout_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  boxout_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  boxout_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  boxout_starts_with?: Maybe<Scalars['String']>;
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
  quote?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  quote_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  quote_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  quote_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  quote_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  quote_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  quote_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  quote_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  quote_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  quote_starts_with?: Maybe<Scalars['String']>;
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

/** References Why record uniquely */
export type WhyWhereUniqueInput = {
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


export type GetDataQuery = { __typename?: 'Query', mindsets: Array<{ __typename?: 'Mindset', id: string, head?: string | null | undefined, subhead?: string | null | undefined, intro?: string | null | undefined, theType?: TheType | null | undefined, activities: Array<{ __typename?: 'Activity', id: string, title?: string | null | undefined }>, who?: { __typename?: 'Who', intro?: string | null | undefined, boxout?: string | null | undefined, boxoutTitle?: string | null | undefined, quote?: string | null | undefined, body?: { __typename?: 'RichText', html: string } | null | undefined } | null | undefined, why?: { __typename?: 'Why', intro?: string | null | undefined, boxout?: string | null | undefined, boxoutTitle?: string | null | undefined, quote?: string | null | undefined, body?: { __typename?: 'RichText', html: string } | null | undefined } | null | undefined, how?: { __typename?: 'How', intro?: string | null | undefined, quote?: string | null | undefined, body?: { __typename?: 'RichText', html: string } | null | undefined } | null | undefined, what?: { __typename?: 'What', intro?: string | null | undefined, quote: Array<string>, boxout?: string | null | undefined, boxoutTitle?: string | null | undefined, byTheNumbers?: string | null | undefined, body?: { __typename?: 'RichText', html: string } | null | undefined } | null | undefined, smallImage?: { __typename?: 'Asset', url: string } | null | undefined, heroImage?: { __typename?: 'Asset', url: string } | null | undefined }>, activities: Array<{ __typename?: 'Activity', id: string, title?: string | null | undefined }> };


export const GetDataDocument = `
    query GetData {
  mindsets {
    id
    head
    subhead
    intro
    theType
    activities {
      id
      title
    }
    who {
      intro
      body {
        html
      }
      boxout
      boxoutTitle
      quote
    }
    why {
      intro
      body {
        html
      }
      boxout
      boxoutTitle
      quote
    }
    how {
      intro
      body {
        html
      }
      quote
    }
    what {
      intro
      body {
        html
      }
      quote
      boxout
      boxoutTitle
      byTheNumbers
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