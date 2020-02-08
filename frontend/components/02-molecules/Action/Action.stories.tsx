import React from 'react';
import {LikeAction, DislikeAction, EditAction, ShareAction} from '.';

export default {
  title: 'Molecules|Actions',
};

export const likeAction = () => (
  <LikeAction />
);

export const dislikeAction = () => (
  <DislikeAction />
);

export const editAction = () => (
  <EditAction id="foo" />
);

export const shareAction = () => (
  <ShareAction />
);

