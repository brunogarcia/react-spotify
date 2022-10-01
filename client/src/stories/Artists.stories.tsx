import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { mockArtists } from "../mocks";
import { Artists } from '../components';
import { SpotifyArtist } from '../types/spotify.model';

const artists: SpotifyArtist[] = mockArtists();

export default {
  title: 'Components/Artists',
  component: Artists,
} as ComponentMeta<typeof Artists>;

const Template: ComponentStory<typeof Artists> = (args) => <Artists {...args} />;

export const Main = Template.bind({});
Main.args = {
  artists,
};
