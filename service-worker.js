// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const GOOGLE_ORIGIN = 'https://www.google.com';
//const PROLIFIC_ORIGIN = 'https://app.prolific.com/researcher/get-started';

// Allows users to open the side panel by clicking on the action toolbar icon
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

// Allows changing the panel html.
chrome.runtime.onMessage.addListener(async (message, sender) => {
  if (message.type === 'open_studies_page') {
    await chrome.sidePanel.setOptions({ 
      path: 'studies-page.html',
    });
  }
  if (message.type === 'open_researcher_page') {
    await chrome.sidePanel.setOptions({ 
      path: 'sidepanel.html',
    });
  }
})
