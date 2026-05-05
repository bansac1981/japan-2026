// github-edit.js — Commits data.js changes directly to GitHub
// One-time setup: user enters their GitHub PAT via the setup prompt (stored in localStorage)

(function() {
  var OWNER = 'bansac1981';
  var REPO = 'japan-2026';
  var FILE_PATH = 'data.js';
  var BRANCH = 'main';

  // ── Token management ──
  function getToken() {
    return localStorage.getItem('japan2026_gh_token') || '';
  }

  function setToken(token) {
    localStorage.setItem('japan2026_gh_token', token);
  }

  // Prompt user for token if not set
  window.setupGitHub = function() {
    var current = getToken();
    var token = prompt(
      'Enter your GitHub Personal Access Token.\n' +
      'This is stored locally in your browser only.\n' +
      '(Get one at github.com > Settings > Developer settings > Tokens)',
      current
    );
    if (token !== null) {
      setToken(token.trim());
      showToast('GitHub token saved!');
    }
  };

  // ── Rebuild data.js content from TRIP_DATA ──
  function buildDataJs() {
    // We serialize the full TRIP_DATA object + helper functions
    var lines = [];
    lines.push('// Japan Family Vacation 2026 — Full Itinerary Data');
    lines.push('// Family: Achin, Snigdha, Anagha (child), Sharanya (child) · Pure Vegetarian');
    lines.push('// Tokyo Apt GPS: 35.7480°N, 139.8570°E (Aoto Station, Katsushika)');
    lines.push('');
    lines.push('const TRIP_DATA = ' + JSON.stringify(TRIP_DATA, null, 2) + ';');
    lines.push('');
    lines.push('// ─── Helpers ──────────────────────────────────────────────────────────────────');
    lines.push('');
    lines.push('function getDayByDate(dateStr) {');
    lines.push('  return TRIP_DATA.days.find(d => d.date === dateStr) || null;');
    lines.push('}');
    lines.push('');
    lines.push('// Build Google Maps transit link');
    lines.push('function mapsLink(origin, destination) {');
    lines.push('  if (!destination) return null;');
    lines.push('  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=transit`;');
    lines.push('}');
    lines.push('');
    lines.push('// Google Image search link for a place');
    lines.push('function photosLink(query) {');
    lines.push('  return `https://www.google.com/search?q=${encodeURIComponent(query + \' Japan\')}&tbm=isch`;');
    lines.push('}');
    lines.push('');
    lines.push('// Region theme');
    lines.push('const REGION_COLORS = ' + JSON.stringify(REGION_COLORS, null, 2) + ';');
    lines.push('');
    lines.push('// ─── Japanese Phrases ─────────────────────────────────────────────────────────');
    lines.push('const PHRASES = ' + JSON.stringify(PHRASES, null, 2) + ';');

    return lines.join('\n');
  }

  // ── Commit to GitHub via API ──
  window.commitToGitHub = function(message) {
    var token = getToken();
    if (!token) {
      // First time — prompt for token
      showToast('GitHub token needed for saving');
      setTimeout(function() { setupGitHub(); }, 500);
      return;
    }

    var apiBase = 'https://api.github.com/repos/' + OWNER + '/' + REPO + '/contents/' + FILE_PATH;

    // Step 1: Get current file SHA
    fetch(apiBase + '?ref=' + BRANCH, {
      headers: { 'Authorization': 'token ' + token }
    })
    .then(function(res) {
      if (!res.ok) throw new Error('GitHub API error: ' + res.status);
      return res.json();
    })
    .then(function(fileInfo) {
      var sha = fileInfo.sha;
      var newContent = buildDataJs();
      var encoded = btoa(unescape(encodeURIComponent(newContent)));

      // Step 2: Update file
      return fetch(apiBase, {
        method: 'PUT',
        headers: {
          'Authorization': 'token ' + token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: message || 'Update itinerary',
          content: encoded,
          sha: sha,
          branch: BRANCH
        })
      });
    })
    .then(function(res) {
      if (!res.ok) throw new Error('Commit failed: ' + res.status);
      return res.json();
    })
    .then(function() {
      showToast('Saved to site! Updates in ~60s');
    })
    .catch(function(err) {
      console.error(err);
      if (err.message.includes('401') || err.message.includes('403')) {
        showToast('Token expired — tap to reset');
        setTimeout(function() { setupGitHub(); }, 1000);
      } else {
        showToast('Save failed: ' + err.message);
      }
    });
  };

})();
