import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Artists } from '../index';
import { mockArtists } from "../../mocks";
import { SpotifyArtist } from '../../types/spotify.model';

const artists: SpotifyArtist[] = mockArtists();

export default {
  title: 'Organism/Artists',
  component: Artists,
} as ComponentMeta<typeof Artists>;

const Template: ComponentStory<typeof Artists> = (args) => <Artists {...args} />;

export const Main = Template.bind({});
Main.args = {
  artists,
};
