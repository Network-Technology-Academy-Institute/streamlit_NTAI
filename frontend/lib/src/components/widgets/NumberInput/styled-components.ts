/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022-2024)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import styled from "@emotion/styled"

const CONTROLS_WIDTH = 32 // px

export const StyledInputContainer = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  alignItems: "center",

  // Mimic the baseweb's borders here, so we can apply the focus style
  // to the entire container and not only the input itself
  borderWidth: "1px",
  borderStyle: "solid",
  // Mimic the logic from createThemeOverrides.
  borderColor:
    theme.colors.widgetBorderColor ||
    theme.colors.widgetBackgroundColor ||
    theme.colors.bgColor,
  transitionDuration: "200ms",
  transitionProperty: "border",
  transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.4, 1)",
  borderRadius: theme.radii.lg,
  overflow: "hidden", // Fix rounded corner being overlayed with corner of internal input.

  "&.focused": {
    borderColor: theme.colors.primary,
  },

  input: {
    MozAppearance: "textfield",
    "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
      WebkitAppearance: "none",
      margin: theme.spacing.none,
    },
  },
}))

export const StyledInputControls = styled.div({
  display: "flex",
  flexDirection: "row",
  alignSelf: "stretch",
})

export const StyledInputControl = styled.button(({ theme }) => ({
  margin: theme.spacing.none,
  border: "none",
  height: theme.sizes.full,
  display: "flex",
  alignItems: "center",
  width: `${CONTROLS_WIDTH}px`,
  justifyContent: "center",
  color: theme.colors.bodyText,
  transition: "color 300ms, backgroundColor 300ms",
  // Mimic the logic from createThemeOverrides.
  backgroundColor:
    theme.colors.widgetBackgroundColor || theme.colors.secondaryBg,
  "&:hover:enabled, &:focus:enabled": {
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    transition: "none",
    outline: "none",
  },
  "&:active": {
    outline: "none",
    border: "none",
  },
  "&:last-of-type": {
    borderTopRightRadius: theme.radii.lg,
    borderBottomRightRadius: theme.radii.lg,
  },
  "&:disabled": {
    cursor: "not-allowed",
    color: theme.colors.fadedText40,
  },
}))

export interface StyledInstructionsContainerProps {
  // If widget is clearable, the instruction needs to be moved a couple
  // pixels to the left to avoid overlapping with the clear button.
  clearable: boolean
}

export const StyledInstructionsContainer =
  styled.div<StyledInstructionsContainerProps>(({ theme, clearable }) => ({
    position: "absolute",
    marginRight: theme.spacing.twoXS,
    left: 0,
    right: `${CONTROLS_WIDTH * 2 + (clearable ? 12 : 0)}px`,
  }))
