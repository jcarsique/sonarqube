/*
 * SonarQube
 * Copyright (C) 2009-2022 SonarSource SA
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
import Tooltip from '../../../components/controls/Tooltip';
import { translate, translateWithParameters } from '../../../helpers/l10n';
import { SourceLine } from '../../../types/types';

export interface LineCoverageProps {
  line: SourceLine;
  scrollToUncoveredLine?: boolean;
}

export function LineCoverage({ line, scrollToUncoveredLine }: LineCoverageProps) {
  const coverageMarker = React.useRef<HTMLTableCellElement>(null);
  React.useEffect(() => {
    if (scrollToUncoveredLine && coverageMarker.current) {
      coverageMarker.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });
    }
  }, [scrollToUncoveredLine, coverageMarker]);

  const className =
    'source-meta source-line-coverage' +
    (line.coverageStatus != null ? ` source-line-${line.coverageStatus}` : '');
  const status = getStatusTooltip(line);

  return (
    <td className={className} data-line-number={line.line} ref={coverageMarker}>
      <Tooltip overlay={status} placement="bottom">
        <div aria-label={status} className="source-line-bar" />
      </Tooltip>
    </td>
  );
}

function getStatusTooltip(line: SourceLine) {
  if (line.coverageStatus === 'uncovered') {
    if (line.conditions) {
      return translateWithParameters('source_viewer.tooltip.uncovered.conditions', line.conditions);
    } else {
      return translate('source_viewer.tooltip.uncovered');
    }
  } else if (line.coverageStatus === 'covered') {
    if (line.conditions) {
      return translateWithParameters('source_viewer.tooltip.covered.conditions', line.conditions);
    } else {
      return translate('source_viewer.tooltip.covered');
    }
  } else if (line.coverageStatus === 'partially-covered') {
    if (line.conditions) {
      return translateWithParameters(
        'source_viewer.tooltip.partially-covered.conditions',
        line.coveredConditions || 0,
        line.conditions
      );
    } else {
      return translate('source_viewer.tooltip.partially-covered');
    }
  }
  return undefined;
}

export default React.memo(LineCoverage);
