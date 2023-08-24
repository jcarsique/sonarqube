/*
 * SonarQube
 * Copyright (C) 2009-2023 SonarSource SA
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
package org.sonar.server.platform.db.migration.version.v102;

import org.sonar.db.Database;
import org.sonar.server.platform.db.migration.step.CreateIndexOnColumn;

class CreateIndexProjectUuidInProjectBranches extends CreateIndexOnColumn {

  private static final String TABLE_NAME = "project_branches";
  private static final String COLUMN_NAME = "project_uuid";

  public CreateIndexProjectUuidInProjectBranches(Database db) {
    super(db, TABLE_NAME, COLUMN_NAME, false);
  }
}
