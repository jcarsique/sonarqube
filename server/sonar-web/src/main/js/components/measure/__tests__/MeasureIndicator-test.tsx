/*
 * SonarQube
 * Copyright (C) 2009-2024 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { MetricKey, MetricType } from '../../../types/metrics';
import MeasureIndicator from '../MeasureIndicator';

it('renders correctly for coverage', () => {
  render(
    <MeasureIndicator
      metricKey={MetricKey.coverage}
      metricType={MetricType.Percent}
      value="73.0"
    />,
  );
  expect(screen.getByRole('img')).toMatchSnapshot();
});
