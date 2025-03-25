# Changelog

## [1.0.0] - 2025-03-25
### Added
- Added `.env` file to store sensitive information (API_KEY, BASE_URL).
- Added `README.md` with setup and instructions to run the code.

### Changed
- Changed `app.py` to use `os.getenv()` for fetching environment variables (API_KEY, BASE_URL).
- Updated `requirements.txt` to include `python-dotenv`.

### Removed
- Removed `config.py` file. All configuration variables are now in `.env`.

### Fixed
- Added `.env` to `.gitignore` to prevent API keys from being committed.

### Deployment Updates
- Added environment variables (API_KEY, BASE_URL) in Render dashboard for production use.

---

## [0.1.0] - 2025-03-24
### Initial Commit
- Created the basic structure of the Flask weather dashboard.
- Set up API calls to OpenWeatherMap and rendered data to frontend.
- Styled frontend using CSS for a clean and minimal look.
git add CHANGELOG.md
git commit -m "Added CHANGELOG.md to document project changes"
git push origin main
