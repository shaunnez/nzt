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

export type Appendix = Node & {
  __typename?: 'Appendix';
  body?: Maybe<RichText>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Appendix>;
  /** List of Appendix versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  smallText?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type AppendixCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type AppendixDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type AppendixHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type AppendixPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type AppendixUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type AppendixConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: AppendixWhereUniqueInput;
};

/** A connection to a list of items. */
export type AppendixConnection = {
  __typename?: 'AppendixConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AppendixEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AppendixCreateInput = {
  body?: Maybe<Scalars['RichTextAST']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  smallText?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AppendixCreateManyInlineInput = {
  /** Connect multiple existing Appendix documents */
  connect?: Maybe<Array<AppendixWhereUniqueInput>>;
  /** Create and connect multiple existing Appendix documents */
  create?: Maybe<Array<AppendixCreateInput>>;
};

export type AppendixCreateOneInlineInput = {
  /** Connect one existing Appendix document */
  connect?: Maybe<AppendixWhereUniqueInput>;
  /** Create and connect one Appendix document */
  create?: Maybe<AppendixCreateInput>;
};

/** An edge in a connection. */
export type AppendixEdge = {
  __typename?: 'AppendixEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Appendix;
};

/** Identifies documents */
export type AppendixManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AppendixWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AppendixWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AppendixWhereInput>>;
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
  smallText?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  smallText_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  smallText_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  smallText_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  smallText_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  smallText_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  smallText_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  smallText_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  smallText_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  smallText_starts_with?: Maybe<Scalars['String']>;
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

export enum AppendixOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SmallTextAsc = 'smallText_ASC',
  SmallTextDesc = 'smallText_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type AppendixUpdateInput = {
  body?: Maybe<Scalars['RichTextAST']>;
  smallText?: Maybe<Scalars['String']>;
};

export type AppendixUpdateManyInlineInput = {
  /** Connect multiple existing Appendix documents */
  connect?: Maybe<Array<AppendixConnectInput>>;
  /** Create and connect multiple Appendix documents */
  create?: Maybe<Array<AppendixCreateInput>>;
  /** Delete multiple Appendix documents */
  delete?: Maybe<Array<AppendixWhereUniqueInput>>;
  /** Disconnect multiple Appendix documents */
  disconnect?: Maybe<Array<AppendixWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Appendix documents */
  set?: Maybe<Array<AppendixWhereUniqueInput>>;
  /** Update multiple Appendix documents */
  update?: Maybe<Array<AppendixUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Appendix documents */
  upsert?: Maybe<Array<AppendixUpsertWithNestedWhereUniqueInput>>;
};

export type AppendixUpdateManyInput = {
  body?: Maybe<Scalars['RichTextAST']>;
  smallText?: Maybe<Scalars['String']>;
};

export type AppendixUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AppendixUpdateManyInput;
  /** Document search */
  where: AppendixWhereInput;
};

export type AppendixUpdateOneInlineInput = {
  /** Connect existing Appendix document */
  connect?: Maybe<AppendixWhereUniqueInput>;
  /** Create and connect one Appendix document */
  create?: Maybe<AppendixCreateInput>;
  /** Delete currently connected Appendix document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Appendix document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Appendix document */
  update?: Maybe<AppendixUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Appendix document */
  upsert?: Maybe<AppendixUpsertWithNestedWhereUniqueInput>;
};

export type AppendixUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AppendixUpdateInput;
  /** Unique document search */
  where: AppendixWhereUniqueInput;
};

export type AppendixUpsertInput = {
  /** Create document if it didn't exist */
  create: AppendixCreateInput;
  /** Update document if it exists */
  update: AppendixUpdateInput;
};

export type AppendixUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AppendixUpsertInput;
  /** Unique document search */
  where: AppendixWhereUniqueInput;
};

/** Identifies documents */
export type AppendixWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AppendixWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AppendixWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AppendixWhereInput>>;
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
  smallText?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  smallText_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  smallText_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  smallText_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  smallText_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  smallText_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  smallText_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  smallText_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  smallText_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  smallText_starts_with?: Maybe<Scalars['String']>;
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

/** References Appendix record uniquely */
export type AppendixWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
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
  fullImageWhoWhatWhereWhyHow: Array<WhoWhatWhereWhyHow>;
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  heroImageHome: Array<Home>;
  heroImageMindset: Array<Mindset>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  imageByTheNumber: Array<ByTheNumber>;
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
export type AssetFullImageWhoWhatWhereWhyHowArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<WhoWhatWhereWhyHowOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<WhoWhatWhereWhyHowWhereInput>;
};


/** Asset system model */
export type AssetHeroImageHomeArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<HomeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<HomeWhereInput>;
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
export type AssetImageByTheNumberArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<ByTheNumberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ByTheNumberWhereInput>;
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
  fullImageWhoWhatWhereWhyHow?: Maybe<WhoWhatWhereWhyHowCreateManyInlineInput>;
  handle: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  heroImageHome?: Maybe<HomeCreateManyInlineInput>;
  heroImageMindset?: Maybe<MindsetCreateManyInlineInput>;
  imageByTheNumber?: Maybe<ByTheNumberCreateManyInlineInput>;
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
  fullImageWhoWhatWhereWhyHow_every?: Maybe<WhoWhatWhereWhyHowWhereInput>;
  fullImageWhoWhatWhereWhyHow_none?: Maybe<WhoWhatWhereWhyHowWhereInput>;
  fullImageWhoWhatWhereWhyHow_some?: Maybe<WhoWhatWhereWhyHowWhereInput>;
  heroImageHome_every?: Maybe<HomeWhereInput>;
  heroImageHome_none?: Maybe<HomeWhereInput>;
  heroImageHome_some?: Maybe<HomeWhereInput>;
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
  imageByTheNumber_every?: Maybe<ByTheNumberWhereInput>;
  imageByTheNumber_none?: Maybe<ByTheNumberWhereInput>;
  imageByTheNumber_some?: Maybe<ByTheNumberWhereInput>;
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
  fullImageWhoWhatWhereWhyHow?: Maybe<WhoWhatWhereWhyHowUpdateManyInlineInput>;
  handle?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  heroImageHome?: Maybe<HomeUpdateManyInlineInput>;
  heroImageMindset?: Maybe<MindsetUpdateManyInlineInput>;
  imageByTheNumber?: Maybe<ByTheNumberUpdateManyInlineInput>;
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
  fullImageWhoWhatWhereWhyHow_every?: Maybe<WhoWhatWhereWhyHowWhereInput>;
  fullImageWhoWhatWhereWhyHow_none?: Maybe<WhoWhatWhereWhyHowWhereInput>;
  fullImageWhoWhatWhereWhyHow_some?: Maybe<WhoWhatWhereWhyHowWhereInput>;
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
  heroImageHome_every?: Maybe<HomeWhereInput>;
  heroImageHome_none?: Maybe<HomeWhereInput>;
  heroImageHome_some?: Maybe<HomeWhereInput>;
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
  imageByTheNumber_every?: Maybe<ByTheNumberWhereInput>;
  imageByTheNumber_none?: Maybe<ByTheNumberWhereInput>;
  imageByTheNumber_some?: Maybe<ByTheNumberWhereInput>;
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
  body?: Maybe<RichText>;
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
  body?: Maybe<Scalars['RichTextAST']>;
  ckuyn4i7r05nd01z3htjsb087?: Maybe<WhoWhatWhereWhyHowCreateManyInlineInput>;
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
  body?: Maybe<Scalars['RichTextAST']>;
  ckuyn4i7r05nd01z3htjsb087?: Maybe<WhoWhatWhereWhyHowUpdateManyInlineInput>;
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
  body?: Maybe<Scalars['RichTextAST']>;
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
  continuumLeftPercentage?: Maybe<Scalars['Int']>;
  continuumLeftText?: Maybe<Scalars['String']>;
  continuumRightText?: Maybe<Scalars['String']>;
  continuumTitle?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<ByTheNumber>;
  /** List of ByTheNumber versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  image?: Maybe<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** System stage field */
  stage: Stage;
  /**
   * Text on first line is large and bold
   * Text on second line sits underneath
   */
  titleAndBody: Array<Scalars['String']>;
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


export type ByTheNumberImageArgs = {
  locales?: Maybe<Array<Locale>>;
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
  ckuynza1506jl01xp1udbdomx?: Maybe<WhoWhatWhereWhyHowCreateManyInlineInput>;
  continuumLeftPercentage?: Maybe<Scalars['Int']>;
  continuumLeftText?: Maybe<Scalars['String']>;
  continuumRightText?: Maybe<Scalars['String']>;
  continuumTitle?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  image?: Maybe<AssetCreateOneInlineInput>;
  titleAndBody?: Maybe<Array<Scalars['String']>>;
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
  continuumLeftPercentage?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  continuumLeftPercentage_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  continuumLeftPercentage_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  continuumLeftPercentage_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  continuumLeftPercentage_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  continuumLeftPercentage_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  continuumLeftPercentage_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  continuumLeftPercentage_not_in?: Maybe<Array<Scalars['Int']>>;
  continuumLeftText?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  continuumLeftText_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  continuumLeftText_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  continuumLeftText_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  continuumLeftText_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  continuumLeftText_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  continuumLeftText_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  continuumLeftText_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  continuumLeftText_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  continuumLeftText_starts_with?: Maybe<Scalars['String']>;
  continuumRightText?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  continuumRightText_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  continuumRightText_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  continuumRightText_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  continuumRightText_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  continuumRightText_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  continuumRightText_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  continuumRightText_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  continuumRightText_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  continuumRightText_starts_with?: Maybe<Scalars['String']>;
  continuumTitle?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  continuumTitle_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  continuumTitle_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  continuumTitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  continuumTitle_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  continuumTitle_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  continuumTitle_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  continuumTitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  continuumTitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  continuumTitle_starts_with?: Maybe<Scalars['String']>;
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
  image?: Maybe<AssetWhereInput>;
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
  titleAndBody?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  titleAndBody_contains_all?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  titleAndBody_contains_none?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  titleAndBody_contains_some?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  titleAndBody_not?: Maybe<Array<Scalars['String']>>;
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
  ContinuumLeftPercentageAsc = 'continuumLeftPercentage_ASC',
  ContinuumLeftPercentageDesc = 'continuumLeftPercentage_DESC',
  ContinuumLeftTextAsc = 'continuumLeftText_ASC',
  ContinuumLeftTextDesc = 'continuumLeftText_DESC',
  ContinuumRightTextAsc = 'continuumRightText_ASC',
  ContinuumRightTextDesc = 'continuumRightText_DESC',
  ContinuumTitleAsc = 'continuumTitle_ASC',
  ContinuumTitleDesc = 'continuumTitle_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAndBodyAsc = 'titleAndBody_ASC',
  TitleAndBodyDesc = 'titleAndBody_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ByTheNumberUpdateInput = {
  ckuynza1506jl01xp1udbdomx?: Maybe<WhoWhatWhereWhyHowUpdateManyInlineInput>;
  continuumLeftPercentage?: Maybe<Scalars['Int']>;
  continuumLeftText?: Maybe<Scalars['String']>;
  continuumRightText?: Maybe<Scalars['String']>;
  continuumTitle?: Maybe<Scalars['String']>;
  image?: Maybe<AssetUpdateOneInlineInput>;
  titleAndBody?: Maybe<Array<Scalars['String']>>;
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
  continuumLeftPercentage?: Maybe<Scalars['Int']>;
  continuumLeftText?: Maybe<Scalars['String']>;
  continuumRightText?: Maybe<Scalars['String']>;
  continuumTitle?: Maybe<Scalars['String']>;
  titleAndBody?: Maybe<Array<Scalars['String']>>;
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
  continuumLeftPercentage?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  continuumLeftPercentage_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  continuumLeftPercentage_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  continuumLeftPercentage_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  continuumLeftPercentage_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  continuumLeftPercentage_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  continuumLeftPercentage_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  continuumLeftPercentage_not_in?: Maybe<Array<Scalars['Int']>>;
  continuumLeftText?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  continuumLeftText_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  continuumLeftText_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  continuumLeftText_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  continuumLeftText_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  continuumLeftText_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  continuumLeftText_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  continuumLeftText_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  continuumLeftText_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  continuumLeftText_starts_with?: Maybe<Scalars['String']>;
  continuumRightText?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  continuumRightText_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  continuumRightText_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  continuumRightText_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  continuumRightText_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  continuumRightText_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  continuumRightText_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  continuumRightText_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  continuumRightText_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  continuumRightText_starts_with?: Maybe<Scalars['String']>;
  continuumTitle?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  continuumTitle_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  continuumTitle_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  continuumTitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  continuumTitle_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  continuumTitle_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  continuumTitle_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  continuumTitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  continuumTitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  continuumTitle_starts_with?: Maybe<Scalars['String']>;
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
  image?: Maybe<AssetWhereInput>;
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
  titleAndBody?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  titleAndBody_contains_all?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  titleAndBody_contains_none?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  titleAndBody_contains_some?: Maybe<Array<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  titleAndBody_not?: Maybe<Array<Scalars['String']>>;
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

export type Home = Node & {
  __typename?: 'Home';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Home>;
  heroCopy?: Maybe<Scalars['String']>;
  heroImage?: Maybe<Asset>;
  heroSmallCopy?: Maybe<Scalars['String']>;
  /** List of Home versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** System stage field */
  stage: Stage;
  universalTruthsCopy?: Maybe<RichText>;
  universalTruthsTitle?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type HomeCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type HomeDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type HomeHeroImageArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type HomeHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type HomePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type HomeUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type HomeConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: HomeWhereUniqueInput;
};

/** A connection to a list of items. */
export type HomeConnection = {
  __typename?: 'HomeConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<HomeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type HomeCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  heroCopy?: Maybe<Scalars['String']>;
  heroImage?: Maybe<AssetCreateOneInlineInput>;
  heroSmallCopy?: Maybe<Scalars['String']>;
  universalTruthsCopy?: Maybe<Scalars['RichTextAST']>;
  universalTruthsTitle?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HomeCreateManyInlineInput = {
  /** Connect multiple existing Home documents */
  connect?: Maybe<Array<HomeWhereUniqueInput>>;
  /** Create and connect multiple existing Home documents */
  create?: Maybe<Array<HomeCreateInput>>;
};

export type HomeCreateOneInlineInput = {
  /** Connect one existing Home document */
  connect?: Maybe<HomeWhereUniqueInput>;
  /** Create and connect one Home document */
  create?: Maybe<HomeCreateInput>;
};

/** An edge in a connection. */
export type HomeEdge = {
  __typename?: 'HomeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Home;
};

/** Identifies documents */
export type HomeManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<HomeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<HomeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<HomeWhereInput>>;
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
  heroCopy?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  heroCopy_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  heroCopy_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  heroCopy_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  heroCopy_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  heroCopy_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  heroCopy_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  heroCopy_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  heroCopy_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  heroCopy_starts_with?: Maybe<Scalars['String']>;
  heroImage?: Maybe<AssetWhereInput>;
  heroSmallCopy?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  heroSmallCopy_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  heroSmallCopy_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  heroSmallCopy_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  heroSmallCopy_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  heroSmallCopy_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  heroSmallCopy_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  heroSmallCopy_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  heroSmallCopy_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  heroSmallCopy_starts_with?: Maybe<Scalars['String']>;
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
  universalTruthsTitle?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  universalTruthsTitle_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  universalTruthsTitle_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  universalTruthsTitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  universalTruthsTitle_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  universalTruthsTitle_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  universalTruthsTitle_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  universalTruthsTitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  universalTruthsTitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  universalTruthsTitle_starts_with?: Maybe<Scalars['String']>;
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

export enum HomeOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HeroCopyAsc = 'heroCopy_ASC',
  HeroCopyDesc = 'heroCopy_DESC',
  HeroSmallCopyAsc = 'heroSmallCopy_ASC',
  HeroSmallCopyDesc = 'heroSmallCopy_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UniversalTruthsTitleAsc = 'universalTruthsTitle_ASC',
  UniversalTruthsTitleDesc = 'universalTruthsTitle_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type HomeUpdateInput = {
  heroCopy?: Maybe<Scalars['String']>;
  heroImage?: Maybe<AssetUpdateOneInlineInput>;
  heroSmallCopy?: Maybe<Scalars['String']>;
  universalTruthsCopy?: Maybe<Scalars['RichTextAST']>;
  universalTruthsTitle?: Maybe<Scalars['String']>;
};

export type HomeUpdateManyInlineInput = {
  /** Connect multiple existing Home documents */
  connect?: Maybe<Array<HomeConnectInput>>;
  /** Create and connect multiple Home documents */
  create?: Maybe<Array<HomeCreateInput>>;
  /** Delete multiple Home documents */
  delete?: Maybe<Array<HomeWhereUniqueInput>>;
  /** Disconnect multiple Home documents */
  disconnect?: Maybe<Array<HomeWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Home documents */
  set?: Maybe<Array<HomeWhereUniqueInput>>;
  /** Update multiple Home documents */
  update?: Maybe<Array<HomeUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Home documents */
  upsert?: Maybe<Array<HomeUpsertWithNestedWhereUniqueInput>>;
};

export type HomeUpdateManyInput = {
  heroCopy?: Maybe<Scalars['String']>;
  heroSmallCopy?: Maybe<Scalars['String']>;
  universalTruthsCopy?: Maybe<Scalars['RichTextAST']>;
  universalTruthsTitle?: Maybe<Scalars['String']>;
};

export type HomeUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HomeUpdateManyInput;
  /** Document search */
  where: HomeWhereInput;
};

export type HomeUpdateOneInlineInput = {
  /** Connect existing Home document */
  connect?: Maybe<HomeWhereUniqueInput>;
  /** Create and connect one Home document */
  create?: Maybe<HomeCreateInput>;
  /** Delete currently connected Home document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Home document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Home document */
  update?: Maybe<HomeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Home document */
  upsert?: Maybe<HomeUpsertWithNestedWhereUniqueInput>;
};

export type HomeUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HomeUpdateInput;
  /** Unique document search */
  where: HomeWhereUniqueInput;
};

export type HomeUpsertInput = {
  /** Create document if it didn't exist */
  create: HomeCreateInput;
  /** Update document if it exists */
  update: HomeUpdateInput;
};

export type HomeUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HomeUpsertInput;
  /** Unique document search */
  where: HomeWhereUniqueInput;
};

/** Identifies documents */
export type HomeWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<HomeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<HomeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<HomeWhereInput>>;
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
  heroCopy?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  heroCopy_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  heroCopy_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  heroCopy_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  heroCopy_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  heroCopy_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  heroCopy_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  heroCopy_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  heroCopy_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  heroCopy_starts_with?: Maybe<Scalars['String']>;
  heroImage?: Maybe<AssetWhereInput>;
  heroSmallCopy?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  heroSmallCopy_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  heroSmallCopy_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  heroSmallCopy_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  heroSmallCopy_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  heroSmallCopy_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  heroSmallCopy_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  heroSmallCopy_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  heroSmallCopy_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  heroSmallCopy_starts_with?: Maybe<Scalars['String']>;
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
  universalTruthsTitle?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  universalTruthsTitle_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  universalTruthsTitle_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  universalTruthsTitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  universalTruthsTitle_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  universalTruthsTitle_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  universalTruthsTitle_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  universalTruthsTitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  universalTruthsTitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  universalTruthsTitle_starts_with?: Maybe<Scalars['String']>;
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

/** References Home record uniquely */
export type HomeWhereUniqueInput = {
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
  /** Create one appendix */
  createAppendix?: Maybe<Appendix>;
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one boxout */
  createBoxout?: Maybe<Boxout>;
  /** Create one byTheNumber */
  createByTheNumber?: Maybe<ByTheNumber>;
  /** Create one home */
  createHome?: Maybe<Home>;
  /** Create one mindset */
  createMindset?: Maybe<Mindset>;
  /** Create one quote */
  createQuote?: Maybe<Quote>;
  /** Create one whoWhatWhereWhyHow */
  createWhoWhatWhereWhyHow?: Maybe<WhoWhatWhereWhyHow>;
  /** Delete one activity from _all_ existing stages. Returns deleted document. */
  deleteActivity?: Maybe<Activity>;
  /** Delete one appendix from _all_ existing stages. Returns deleted document. */
  deleteAppendix?: Maybe<Appendix>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one boxout from _all_ existing stages. Returns deleted document. */
  deleteBoxout?: Maybe<Boxout>;
  /** Delete one byTheNumber from _all_ existing stages. Returns deleted document. */
  deleteByTheNumber?: Maybe<ByTheNumber>;
  /** Delete one home from _all_ existing stages. Returns deleted document. */
  deleteHome?: Maybe<Home>;
  /**
   * Delete many Activity documents
   * @deprecated Please use the new paginated many mutation (deleteManyActivitiesConnection)
   */
  deleteManyActivities: BatchPayload;
  /** Delete many Activity documents, return deleted documents */
  deleteManyActivitiesConnection: ActivityConnection;
  /**
   * Delete many Appendix documents
   * @deprecated Please use the new paginated many mutation (deleteManyAppendicesConnection)
   */
  deleteManyAppendices: BatchPayload;
  /** Delete many Appendix documents, return deleted documents */
  deleteManyAppendicesConnection: AppendixConnection;
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
   * Delete many Home documents
   * @deprecated Please use the new paginated many mutation (deleteManyHomesConnection)
   */
  deleteManyHomes: BatchPayload;
  /** Delete many Home documents, return deleted documents */
  deleteManyHomesConnection: HomeConnection;
  /**
   * Delete many Mindset documents
   * @deprecated Please use the new paginated many mutation (deleteManyMindsetsConnection)
   */
  deleteManyMindsets: BatchPayload;
  /** Delete many Mindset documents, return deleted documents */
  deleteManyMindsetsConnection: MindsetConnection;
  /**
   * Delete many Quote documents
   * @deprecated Please use the new paginated many mutation (deleteManyQuotesConnection)
   */
  deleteManyQuotes: BatchPayload;
  /** Delete many Quote documents, return deleted documents */
  deleteManyQuotesConnection: QuoteConnection;
  /**
   * Delete many WhoWhatWhereWhyHow documents
   * @deprecated Please use the new paginated many mutation (deleteManyWhoWhatWhereWhyHowsConnection)
   */
  deleteManyWhoWhatWhereWhyHows: BatchPayload;
  /** Delete many WhoWhatWhereWhyHow documents, return deleted documents */
  deleteManyWhoWhatWhereWhyHowsConnection: WhoWhatWhereWhyHowConnection;
  /** Delete one mindset from _all_ existing stages. Returns deleted document. */
  deleteMindset?: Maybe<Mindset>;
  /** Delete one quote from _all_ existing stages. Returns deleted document. */
  deleteQuote?: Maybe<Quote>;
  /** Delete one whoWhatWhereWhyHow from _all_ existing stages. Returns deleted document. */
  deleteWhoWhatWhereWhyHow?: Maybe<WhoWhatWhereWhyHow>;
  /** Publish one activity */
  publishActivity?: Maybe<Activity>;
  /** Publish one appendix */
  publishAppendix?: Maybe<Appendix>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one boxout */
  publishBoxout?: Maybe<Boxout>;
  /** Publish one byTheNumber */
  publishByTheNumber?: Maybe<ByTheNumber>;
  /** Publish one home */
  publishHome?: Maybe<Home>;
  /**
   * Publish many Activity documents
   * @deprecated Please use the new paginated many mutation (publishManyActivitiesConnection)
   */
  publishManyActivities: BatchPayload;
  /** Publish many Activity documents */
  publishManyActivitiesConnection: ActivityConnection;
  /**
   * Publish many Appendix documents
   * @deprecated Please use the new paginated many mutation (publishManyAppendicesConnection)
   */
  publishManyAppendices: BatchPayload;
  /** Publish many Appendix documents */
  publishManyAppendicesConnection: AppendixConnection;
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
   * Publish many Home documents
   * @deprecated Please use the new paginated many mutation (publishManyHomesConnection)
   */
  publishManyHomes: BatchPayload;
  /** Publish many Home documents */
  publishManyHomesConnection: HomeConnection;
  /**
   * Publish many Mindset documents
   * @deprecated Please use the new paginated many mutation (publishManyMindsetsConnection)
   */
  publishManyMindsets: BatchPayload;
  /** Publish many Mindset documents */
  publishManyMindsetsConnection: MindsetConnection;
  /**
   * Publish many Quote documents
   * @deprecated Please use the new paginated many mutation (publishManyQuotesConnection)
   */
  publishManyQuotes: BatchPayload;
  /** Publish many Quote documents */
  publishManyQuotesConnection: QuoteConnection;
  /**
   * Publish many WhoWhatWhereWhyHow documents
   * @deprecated Please use the new paginated many mutation (publishManyWhoWhatWhereWhyHowsConnection)
   */
  publishManyWhoWhatWhereWhyHows: BatchPayload;
  /** Publish many WhoWhatWhereWhyHow documents */
  publishManyWhoWhatWhereWhyHowsConnection: WhoWhatWhereWhyHowConnection;
  /** Publish one mindset */
  publishMindset?: Maybe<Mindset>;
  /** Publish one quote */
  publishQuote?: Maybe<Quote>;
  /** Publish one whoWhatWhereWhyHow */
  publishWhoWhatWhereWhyHow?: Maybe<WhoWhatWhereWhyHow>;
  /** Unpublish one activity from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishActivity?: Maybe<Activity>;
  /** Unpublish one appendix from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAppendix?: Maybe<Appendix>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one boxout from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishBoxout?: Maybe<Boxout>;
  /** Unpublish one byTheNumber from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishByTheNumber?: Maybe<ByTheNumber>;
  /** Unpublish one home from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishHome?: Maybe<Home>;
  /**
   * Unpublish many Activity documents
   * @deprecated Please use the new paginated many mutation (unpublishManyActivitiesConnection)
   */
  unpublishManyActivities: BatchPayload;
  /** Find many Activity documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyActivitiesConnection: ActivityConnection;
  /**
   * Unpublish many Appendix documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAppendicesConnection)
   */
  unpublishManyAppendices: BatchPayload;
  /** Find many Appendix documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAppendicesConnection: AppendixConnection;
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
   * Unpublish many Home documents
   * @deprecated Please use the new paginated many mutation (unpublishManyHomesConnection)
   */
  unpublishManyHomes: BatchPayload;
  /** Find many Home documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyHomesConnection: HomeConnection;
  /**
   * Unpublish many Mindset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyMindsetsConnection)
   */
  unpublishManyMindsets: BatchPayload;
  /** Find many Mindset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyMindsetsConnection: MindsetConnection;
  /**
   * Unpublish many Quote documents
   * @deprecated Please use the new paginated many mutation (unpublishManyQuotesConnection)
   */
  unpublishManyQuotes: BatchPayload;
  /** Find many Quote documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyQuotesConnection: QuoteConnection;
  /**
   * Unpublish many WhoWhatWhereWhyHow documents
   * @deprecated Please use the new paginated many mutation (unpublishManyWhoWhatWhereWhyHowsConnection)
   */
  unpublishManyWhoWhatWhereWhyHows: BatchPayload;
  /** Find many WhoWhatWhereWhyHow documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyWhoWhatWhereWhyHowsConnection: WhoWhatWhereWhyHowConnection;
  /** Unpublish one mindset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishMindset?: Maybe<Mindset>;
  /** Unpublish one quote from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishQuote?: Maybe<Quote>;
  /** Unpublish one whoWhatWhereWhyHow from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishWhoWhatWhereWhyHow?: Maybe<WhoWhatWhereWhyHow>;
  /** Update one activity */
  updateActivity?: Maybe<Activity>;
  /** Update one appendix */
  updateAppendix?: Maybe<Appendix>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one boxout */
  updateBoxout?: Maybe<Boxout>;
  /** Update one byTheNumber */
  updateByTheNumber?: Maybe<ByTheNumber>;
  /** Update one home */
  updateHome?: Maybe<Home>;
  /**
   * Update many activities
   * @deprecated Please use the new paginated many mutation (updateManyActivitiesConnection)
   */
  updateManyActivities: BatchPayload;
  /** Update many Activity documents */
  updateManyActivitiesConnection: ActivityConnection;
  /**
   * Update many appendices
   * @deprecated Please use the new paginated many mutation (updateManyAppendicesConnection)
   */
  updateManyAppendices: BatchPayload;
  /** Update many Appendix documents */
  updateManyAppendicesConnection: AppendixConnection;
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
   * Update many homes
   * @deprecated Please use the new paginated many mutation (updateManyHomesConnection)
   */
  updateManyHomes: BatchPayload;
  /** Update many Home documents */
  updateManyHomesConnection: HomeConnection;
  /**
   * Update many mindsets
   * @deprecated Please use the new paginated many mutation (updateManyMindsetsConnection)
   */
  updateManyMindsets: BatchPayload;
  /** Update many Mindset documents */
  updateManyMindsetsConnection: MindsetConnection;
  /**
   * Update many quotes
   * @deprecated Please use the new paginated many mutation (updateManyQuotesConnection)
   */
  updateManyQuotes: BatchPayload;
  /** Update many Quote documents */
  updateManyQuotesConnection: QuoteConnection;
  /**
   * Update many whoWhatWhereWhyHows
   * @deprecated Please use the new paginated many mutation (updateManyWhoWhatWhereWhyHowsConnection)
   */
  updateManyWhoWhatWhereWhyHows: BatchPayload;
  /** Update many WhoWhatWhereWhyHow documents */
  updateManyWhoWhatWhereWhyHowsConnection: WhoWhatWhereWhyHowConnection;
  /** Update one mindset */
  updateMindset?: Maybe<Mindset>;
  /** Update one quote */
  updateQuote?: Maybe<Quote>;
  /** Update one whoWhatWhereWhyHow */
  updateWhoWhatWhereWhyHow?: Maybe<WhoWhatWhereWhyHow>;
  /** Upsert one activity */
  upsertActivity?: Maybe<Activity>;
  /** Upsert one appendix */
  upsertAppendix?: Maybe<Appendix>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one boxout */
  upsertBoxout?: Maybe<Boxout>;
  /** Upsert one byTheNumber */
  upsertByTheNumber?: Maybe<ByTheNumber>;
  /** Upsert one home */
  upsertHome?: Maybe<Home>;
  /** Upsert one mindset */
  upsertMindset?: Maybe<Mindset>;
  /** Upsert one quote */
  upsertQuote?: Maybe<Quote>;
  /** Upsert one whoWhatWhereWhyHow */
  upsertWhoWhatWhereWhyHow?: Maybe<WhoWhatWhereWhyHow>;
};


export type MutationCreateActivityArgs = {
  data: ActivityCreateInput;
};


export type MutationCreateAppendixArgs = {
  data: AppendixCreateInput;
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


export type MutationCreateHomeArgs = {
  data: HomeCreateInput;
};


export type MutationCreateMindsetArgs = {
  data: MindsetCreateInput;
};


export type MutationCreateQuoteArgs = {
  data: QuoteCreateInput;
};


export type MutationCreateWhoWhatWhereWhyHowArgs = {
  data: WhoWhatWhereWhyHowCreateInput;
};


export type MutationDeleteActivityArgs = {
  where: ActivityWhereUniqueInput;
};


export type MutationDeleteAppendixArgs = {
  where: AppendixWhereUniqueInput;
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


export type MutationDeleteHomeArgs = {
  where: HomeWhereUniqueInput;
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


export type MutationDeleteManyAppendicesArgs = {
  where?: Maybe<AppendixManyWhereInput>;
};


export type MutationDeleteManyAppendicesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AppendixManyWhereInput>;
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


export type MutationDeleteManyHomesArgs = {
  where?: Maybe<HomeManyWhereInput>;
};


export type MutationDeleteManyHomesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<HomeManyWhereInput>;
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


export type MutationDeleteManyQuotesArgs = {
  where?: Maybe<QuoteManyWhereInput>;
};


export type MutationDeleteManyQuotesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<QuoteManyWhereInput>;
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


export type MutationDeleteQuoteArgs = {
  where: QuoteWhereUniqueInput;
};


export type MutationDeleteWhoWhatWhereWhyHowArgs = {
  where: WhoWhatWhereWhyHowWhereUniqueInput;
};


export type MutationPublishActivityArgs = {
  to?: Array<Stage>;
  where: ActivityWhereUniqueInput;
};


export type MutationPublishAppendixArgs = {
  to?: Array<Stage>;
  where: AppendixWhereUniqueInput;
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


export type MutationPublishHomeArgs = {
  to?: Array<Stage>;
  where: HomeWhereUniqueInput;
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


export type MutationPublishManyAppendicesArgs = {
  to?: Array<Stage>;
  where?: Maybe<AppendixManyWhereInput>;
};


export type MutationPublishManyAppendicesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<AppendixManyWhereInput>;
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


export type MutationPublishManyHomesArgs = {
  to?: Array<Stage>;
  where?: Maybe<HomeManyWhereInput>;
};


export type MutationPublishManyHomesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<HomeManyWhereInput>;
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


export type MutationPublishManyQuotesArgs = {
  to?: Array<Stage>;
  where?: Maybe<QuoteManyWhereInput>;
};


export type MutationPublishManyQuotesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: Maybe<QuoteManyWhereInput>;
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


export type MutationPublishQuoteArgs = {
  to?: Array<Stage>;
  where: QuoteWhereUniqueInput;
};


export type MutationPublishWhoWhatWhereWhyHowArgs = {
  to?: Array<Stage>;
  where: WhoWhatWhereWhyHowWhereUniqueInput;
};


export type MutationUnpublishActivityArgs = {
  from?: Array<Stage>;
  where: ActivityWhereUniqueInput;
};


export type MutationUnpublishAppendixArgs = {
  from?: Array<Stage>;
  where: AppendixWhereUniqueInput;
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


export type MutationUnpublishHomeArgs = {
  from?: Array<Stage>;
  where: HomeWhereUniqueInput;
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


export type MutationUnpublishManyAppendicesArgs = {
  from?: Array<Stage>;
  where?: Maybe<AppendixManyWhereInput>;
};


export type MutationUnpublishManyAppendicesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<AppendixManyWhereInput>;
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


export type MutationUnpublishManyHomesArgs = {
  from?: Array<Stage>;
  where?: Maybe<HomeManyWhereInput>;
};


export type MutationUnpublishManyHomesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<HomeManyWhereInput>;
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


export type MutationUnpublishManyQuotesArgs = {
  from?: Array<Stage>;
  where?: Maybe<QuoteManyWhereInput>;
};


export type MutationUnpublishManyQuotesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<QuoteManyWhereInput>;
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


export type MutationUnpublishQuoteArgs = {
  from?: Array<Stage>;
  where: QuoteWhereUniqueInput;
};


export type MutationUnpublishWhoWhatWhereWhyHowArgs = {
  from?: Array<Stage>;
  where: WhoWhatWhereWhyHowWhereUniqueInput;
};


export type MutationUpdateActivityArgs = {
  data: ActivityUpdateInput;
  where: ActivityWhereUniqueInput;
};


export type MutationUpdateAppendixArgs = {
  data: AppendixUpdateInput;
  where: AppendixWhereUniqueInput;
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


export type MutationUpdateHomeArgs = {
  data: HomeUpdateInput;
  where: HomeWhereUniqueInput;
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


export type MutationUpdateManyAppendicesArgs = {
  data: AppendixUpdateManyInput;
  where?: Maybe<AppendixManyWhereInput>;
};


export type MutationUpdateManyAppendicesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: AppendixUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AppendixManyWhereInput>;
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


export type MutationUpdateManyHomesArgs = {
  data: HomeUpdateManyInput;
  where?: Maybe<HomeManyWhereInput>;
};


export type MutationUpdateManyHomesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: HomeUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<HomeManyWhereInput>;
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


export type MutationUpdateManyQuotesArgs = {
  data: QuoteUpdateManyInput;
  where?: Maybe<QuoteManyWhereInput>;
};


export type MutationUpdateManyQuotesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: QuoteUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<QuoteManyWhereInput>;
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


export type MutationUpdateQuoteArgs = {
  data: QuoteUpdateInput;
  where: QuoteWhereUniqueInput;
};


export type MutationUpdateWhoWhatWhereWhyHowArgs = {
  data: WhoWhatWhereWhyHowUpdateInput;
  where: WhoWhatWhereWhyHowWhereUniqueInput;
};


export type MutationUpsertActivityArgs = {
  upsert: ActivityUpsertInput;
  where: ActivityWhereUniqueInput;
};


export type MutationUpsertAppendixArgs = {
  upsert: AppendixUpsertInput;
  where: AppendixWhereUniqueInput;
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


export type MutationUpsertHomeArgs = {
  upsert: HomeUpsertInput;
  where: HomeWhereUniqueInput;
};


export type MutationUpsertMindsetArgs = {
  upsert: MindsetUpsertInput;
  where: MindsetWhereUniqueInput;
};


export type MutationUpsertQuoteArgs = {
  upsert: QuoteUpsertInput;
  where: QuoteWhereUniqueInput;
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
  /** Retrieve multiple appendices */
  appendices: Array<Appendix>;
  /** Retrieve multiple appendices using the Relay connection interface */
  appendicesConnection: AppendixConnection;
  /** Retrieve a single appendix */
  appendix?: Maybe<Appendix>;
  /** Retrieve document version */
  appendixVersion?: Maybe<DocumentVersion>;
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
  /** Retrieve a single home */
  home?: Maybe<Home>;
  /** Retrieve document version */
  homeVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple homes */
  homes: Array<Home>;
  /** Retrieve multiple homes using the Relay connection interface */
  homesConnection: HomeConnection;
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
  /** Retrieve a single quote */
  quote?: Maybe<Quote>;
  /** Retrieve document version */
  quoteVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple quotes */
  quotes: Array<Quote>;
  /** Retrieve multiple quotes using the Relay connection interface */
  quotesConnection: QuoteConnection;
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


export type QueryAppendicesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<AppendixOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<AppendixWhereInput>;
};


export type QueryAppendicesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<AppendixOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<AppendixWhereInput>;
};


export type QueryAppendixArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AppendixWhereUniqueInput;
};


export type QueryAppendixVersionArgs = {
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


export type QueryHomeArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: HomeWhereUniqueInput;
};


export type QueryHomeVersionArgs = {
  where: VersionWhereInput;
};


export type QueryHomesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<HomeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<HomeWhereInput>;
};


export type QueryHomesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<HomeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<HomeWhereInput>;
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


export type QueryQuoteArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: QuoteWhereUniqueInput;
};


export type QueryQuoteVersionArgs = {
  where: VersionWhereInput;
};


export type QueryQuotesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<QuoteOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<QuoteWhereInput>;
};


export type QueryQuotesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: Maybe<QuoteOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<QuoteWhereInput>;
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

export type Quote = Node & {
  __typename?: 'Quote';
  continuumLeftText?: Maybe<Scalars['String']>;
  continuumPercentageLeft?: Maybe<Scalars['Int']>;
  continuumRightText?: Maybe<Scalars['String']>;
  continuumTitle?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Quote>;
  /** List of Quote versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** System stage field */
  stage: Stage;
  text?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type QuoteCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type QuoteDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type QuoteHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type QuotePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type QuoteUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type QuoteConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: QuoteWhereUniqueInput;
};

/** A connection to a list of items. */
export type QuoteConnection = {
  __typename?: 'QuoteConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<QuoteEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type QuoteCreateInput = {
  ckuyn3jv305u401xp3mwec1f2?: Maybe<WhoWhatWhereWhyHowCreateManyInlineInput>;
  continuumLeftText?: Maybe<Scalars['String']>;
  continuumPercentageLeft?: Maybe<Scalars['Int']>;
  continuumRightText?: Maybe<Scalars['String']>;
  continuumTitle?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type QuoteCreateManyInlineInput = {
  /** Connect multiple existing Quote documents */
  connect?: Maybe<Array<QuoteWhereUniqueInput>>;
  /** Create and connect multiple existing Quote documents */
  create?: Maybe<Array<QuoteCreateInput>>;
};

export type QuoteCreateOneInlineInput = {
  /** Connect one existing Quote document */
  connect?: Maybe<QuoteWhereUniqueInput>;
  /** Create and connect one Quote document */
  create?: Maybe<QuoteCreateInput>;
};

/** An edge in a connection. */
export type QuoteEdge = {
  __typename?: 'QuoteEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Quote;
};

/** Identifies documents */
export type QuoteManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<QuoteWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<QuoteWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<QuoteWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  continuumLeftText?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  continuumLeftText_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  continuumLeftText_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  continuumLeftText_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  continuumLeftText_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  continuumLeftText_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  continuumLeftText_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  continuumLeftText_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  continuumLeftText_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  continuumLeftText_starts_with?: Maybe<Scalars['String']>;
  continuumPercentageLeft?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  continuumPercentageLeft_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  continuumPercentageLeft_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  continuumPercentageLeft_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  continuumPercentageLeft_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  continuumPercentageLeft_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  continuumPercentageLeft_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  continuumPercentageLeft_not_in?: Maybe<Array<Scalars['Int']>>;
  continuumRightText?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  continuumRightText_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  continuumRightText_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  continuumRightText_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  continuumRightText_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  continuumRightText_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  continuumRightText_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  continuumRightText_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  continuumRightText_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  continuumRightText_starts_with?: Maybe<Scalars['String']>;
  continuumTitle?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  continuumTitle_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  continuumTitle_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  continuumTitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  continuumTitle_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  continuumTitle_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  continuumTitle_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  continuumTitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  continuumTitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  continuumTitle_starts_with?: Maybe<Scalars['String']>;
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
  text?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  text_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  text_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  text_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  text_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  text_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  text_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  text_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  text_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  text_starts_with?: Maybe<Scalars['String']>;
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

export enum QuoteOrderByInput {
  ContinuumLeftTextAsc = 'continuumLeftText_ASC',
  ContinuumLeftTextDesc = 'continuumLeftText_DESC',
  ContinuumPercentageLeftAsc = 'continuumPercentageLeft_ASC',
  ContinuumPercentageLeftDesc = 'continuumPercentageLeft_DESC',
  ContinuumRightTextAsc = 'continuumRightText_ASC',
  ContinuumRightTextDesc = 'continuumRightText_DESC',
  ContinuumTitleAsc = 'continuumTitle_ASC',
  ContinuumTitleDesc = 'continuumTitle_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type QuoteUpdateInput = {
  ckuyn3jv305u401xp3mwec1f2?: Maybe<WhoWhatWhereWhyHowUpdateManyInlineInput>;
  continuumLeftText?: Maybe<Scalars['String']>;
  continuumPercentageLeft?: Maybe<Scalars['Int']>;
  continuumRightText?: Maybe<Scalars['String']>;
  continuumTitle?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type QuoteUpdateManyInlineInput = {
  /** Connect multiple existing Quote documents */
  connect?: Maybe<Array<QuoteConnectInput>>;
  /** Create and connect multiple Quote documents */
  create?: Maybe<Array<QuoteCreateInput>>;
  /** Delete multiple Quote documents */
  delete?: Maybe<Array<QuoteWhereUniqueInput>>;
  /** Disconnect multiple Quote documents */
  disconnect?: Maybe<Array<QuoteWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Quote documents */
  set?: Maybe<Array<QuoteWhereUniqueInput>>;
  /** Update multiple Quote documents */
  update?: Maybe<Array<QuoteUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Quote documents */
  upsert?: Maybe<Array<QuoteUpsertWithNestedWhereUniqueInput>>;
};

export type QuoteUpdateManyInput = {
  continuumLeftText?: Maybe<Scalars['String']>;
  continuumPercentageLeft?: Maybe<Scalars['Int']>;
  continuumRightText?: Maybe<Scalars['String']>;
  continuumTitle?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type QuoteUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: QuoteUpdateManyInput;
  /** Document search */
  where: QuoteWhereInput;
};

export type QuoteUpdateOneInlineInput = {
  /** Connect existing Quote document */
  connect?: Maybe<QuoteWhereUniqueInput>;
  /** Create and connect one Quote document */
  create?: Maybe<QuoteCreateInput>;
  /** Delete currently connected Quote document */
  delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Quote document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Quote document */
  update?: Maybe<QuoteUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Quote document */
  upsert?: Maybe<QuoteUpsertWithNestedWhereUniqueInput>;
};

export type QuoteUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: QuoteUpdateInput;
  /** Unique document search */
  where: QuoteWhereUniqueInput;
};

export type QuoteUpsertInput = {
  /** Create document if it didn't exist */
  create: QuoteCreateInput;
  /** Update document if it exists */
  update: QuoteUpdateInput;
};

export type QuoteUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: QuoteUpsertInput;
  /** Unique document search */
  where: QuoteWhereUniqueInput;
};

/** Identifies documents */
export type QuoteWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<QuoteWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<QuoteWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<QuoteWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  continuumLeftText?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  continuumLeftText_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  continuumLeftText_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  continuumLeftText_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  continuumLeftText_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  continuumLeftText_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  continuumLeftText_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  continuumLeftText_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  continuumLeftText_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  continuumLeftText_starts_with?: Maybe<Scalars['String']>;
  continuumPercentageLeft?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  continuumPercentageLeft_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  continuumPercentageLeft_gte?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  continuumPercentageLeft_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  continuumPercentageLeft_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  continuumPercentageLeft_lte?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  continuumPercentageLeft_not?: Maybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  continuumPercentageLeft_not_in?: Maybe<Array<Scalars['Int']>>;
  continuumRightText?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  continuumRightText_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  continuumRightText_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  continuumRightText_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  continuumRightText_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  continuumRightText_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  continuumRightText_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  continuumRightText_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  continuumRightText_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  continuumRightText_starts_with?: Maybe<Scalars['String']>;
  continuumTitle?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  continuumTitle_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  continuumTitle_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  continuumTitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  continuumTitle_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  continuumTitle_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  continuumTitle_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  continuumTitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  continuumTitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  continuumTitle_starts_with?: Maybe<Scalars['String']>;
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
  text?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  text_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  text_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  text_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  text_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  text_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  text_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  text_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  text_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  text_starts_with?: Maybe<Scalars['String']>;
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

/** References Quote record uniquely */
export type QuoteWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
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
  body?: Maybe<RichText>;
  boxouts: Array<Boxout>;
  byTheNumber?: Maybe<ByTheNumber>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<WhoWhatWhereWhyHow>;
  fullImage?: Maybe<Asset>;
  /** List of WhoWhatWhereWhyHow versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  intro?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  quotes: Array<Quote>;
  /** System stage field */
  stage: Stage;
  theType?: Maybe<WhoWhatWhereWhyHowType>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type WhoWhatWhereWhyHowBoxoutsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<BoxoutOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<BoxoutWhereInput>;
};


export type WhoWhatWhereWhyHowByTheNumberArgs = {
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


export type WhoWhatWhereWhyHowFullImageArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type WhoWhatWhereWhyHowHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type WhoWhatWhereWhyHowPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};


export type WhoWhatWhereWhyHowQuotesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<QuoteOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<QuoteWhereInput>;
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
  body?: Maybe<Scalars['RichTextAST']>;
  boxouts?: Maybe<BoxoutCreateManyInlineInput>;
  byTheNumber?: Maybe<ByTheNumberCreateOneInlineInput>;
  ckuvss8c024l101xid05ye343?: Maybe<MindsetCreateManyInlineInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  fullImage?: Maybe<AssetCreateOneInlineInput>;
  intro?: Maybe<Scalars['String']>;
  quotes?: Maybe<QuoteCreateManyInlineInput>;
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
  boxouts_every?: Maybe<BoxoutWhereInput>;
  boxouts_none?: Maybe<BoxoutWhereInput>;
  boxouts_some?: Maybe<BoxoutWhereInput>;
  byTheNumber?: Maybe<ByTheNumberWhereInput>;
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
  fullImage?: Maybe<AssetWhereInput>;
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
  quotes_every?: Maybe<QuoteWhereInput>;
  quotes_none?: Maybe<QuoteWhereInput>;
  quotes_some?: Maybe<QuoteWhereInput>;
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
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
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

export enum WhoWhatWhereWhyHowType {
  How = 'how',
  What = 'what',
  Where = 'where',
  Who = 'who',
  Why = 'why'
}

export type WhoWhatWhereWhyHowUpdateInput = {
  body?: Maybe<Scalars['RichTextAST']>;
  boxouts?: Maybe<BoxoutUpdateManyInlineInput>;
  byTheNumber?: Maybe<ByTheNumberUpdateOneInlineInput>;
  ckuvss8c024l101xid05ye343?: Maybe<MindsetUpdateManyInlineInput>;
  fullImage?: Maybe<AssetUpdateOneInlineInput>;
  intro?: Maybe<Scalars['String']>;
  quotes?: Maybe<QuoteUpdateManyInlineInput>;
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
  body?: Maybe<Scalars['RichTextAST']>;
  intro?: Maybe<Scalars['String']>;
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
  boxouts_every?: Maybe<BoxoutWhereInput>;
  boxouts_none?: Maybe<BoxoutWhereInput>;
  boxouts_some?: Maybe<BoxoutWhereInput>;
  byTheNumber?: Maybe<ByTheNumberWhereInput>;
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
  fullImage?: Maybe<AssetWhereInput>;
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
  quotes_every?: Maybe<QuoteWhereInput>;
  quotes_none?: Maybe<QuoteWhereInput>;
  quotes_some?: Maybe<QuoteWhereInput>;
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


export type GetDataQuery = { __typename?: 'Query', activities: Array<{ __typename?: 'Activity', id: string, title?: string | null | undefined }>, appendices: Array<{ __typename?: 'Appendix', smallText?: string | null | undefined, body?: { __typename?: 'RichText', html: string } | null | undefined }>, homes: Array<{ __typename?: 'Home', heroSmallCopy?: string | null | undefined, heroCopy?: string | null | undefined, universalTruthsTitle?: string | null | undefined, heroImage?: { __typename?: 'Asset', url: string } | null | undefined, universalTruthsCopy?: { __typename?: 'RichText', html: string } | null | undefined }>, mindsets: Array<{ __typename?: 'Mindset', id: string, enabled?: boolean | null | undefined, head?: string | null | undefined, intro?: string | null | undefined, theType?: TheType | null | undefined, activities: Array<{ __typename?: 'Activity', id: string, title?: string | null | undefined }>, smallImage?: { __typename?: 'Asset', url: string } | null | undefined, heroImage?: { __typename?: 'Asset', url: string } | null | undefined, whoWhatWhereWhyHows: Array<{ __typename?: 'WhoWhatWhereWhyHow', theType?: WhoWhatWhereWhyHowType | null | undefined, intro?: string | null | undefined, body?: { __typename?: 'RichText', html: string } | null | undefined, boxouts: Array<{ __typename?: 'Boxout', title?: string | null | undefined, largeText?: string | null | undefined, content?: string | null | undefined, backgroundImage?: { __typename?: 'Asset', url: string } | null | undefined, body?: { __typename?: 'RichText', html: string } | null | undefined }>, quotes: Array<{ __typename?: 'Quote', text?: string | null | undefined, continuumTitle?: string | null | undefined, continuumLeftText?: string | null | undefined, continuumRightText?: string | null | undefined, continuumPercentageLeft?: number | null | undefined }>, byTheNumber?: { __typename?: 'ByTheNumber', titleAndBody: Array<string>, continuumTitle?: string | null | undefined, continuumLeftText?: string | null | undefined, continuumRightText?: string | null | undefined, continuumLeftPercentage?: number | null | undefined, image?: { __typename?: 'Asset', url: string } | null | undefined } | null | undefined, fullImage?: { __typename?: 'Asset', url: string } | null | undefined }> }> };


export const GetDataDocument = `
    query GetData {
  activities {
    id
    title
  }
  appendices {
    body {
      html
    }
    smallText
  }
  homes {
    heroImage {
      url
    }
    heroSmallCopy
    heroCopy
    universalTruthsTitle
    universalTruthsCopy {
      html
    }
  }
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
    smallImage {
      url
    }
    heroImage {
      url
    }
    whoWhatWhereWhyHows {
      theType
      intro
      body {
        html
      }
      boxouts {
        title
        largeText
        content
        backgroundImage {
          url
        }
        body {
          html
        }
      }
      quotes {
        text
        continuumTitle
        continuumLeftText
        continuumRightText
        continuumPercentageLeft
      }
      byTheNumber {
        titleAndBody
        continuumTitle
        continuumLeftText
        continuumRightText
        continuumLeftPercentage
        image {
          url
        }
      }
      fullImage {
        url
      }
    }
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