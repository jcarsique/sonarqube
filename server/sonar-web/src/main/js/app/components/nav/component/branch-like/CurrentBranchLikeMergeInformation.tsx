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
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { isPullRequest } from '../../../../../helpers/branch-like';
import { translate, translateWithParameters } from '../../../../../helpers/l10n';
import { BranchLike } from '../../../../../types/branch-like';

export interface CurrentBranchLikeMergeInformationProps {
  currentBranchLike: BranchLike;
}

export function CurrentBranchLikeMergeInformation(props: CurrentBranchLikeMergeInformationProps) {
  const { currentBranchLike } = props;

  if (!isPullRequest(currentBranchLike)) {
    return null;
  }

  return (
    <span
      className="sw-text-ellipsis sw-whitespace-nowrap sw-overflow-hidden sw-mx-1 sw-flex-shrink sw-min-w-0"
      title={translateWithParameters(
        'branch_like_navigation.for_merge_into_x_from_y.title',
        currentBranchLike.target,
        currentBranchLike.branch,
      )}
    >
      <FormattedMessage
        defaultMessage={translate('branch_like_navigation.for_merge_into_x_from_y')}
        id="branch_like_navigation.for_merge_into_x_from_y"
        values={{
          target: <strong>{currentBranchLike.target}</strong>,
          branch: <strong>{currentBranchLike.branch}</strong>,
        }}
      />
    </span>
  );
}

export default React.memo(CurrentBranchLikeMergeInformation);
