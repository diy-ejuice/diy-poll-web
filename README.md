# diy-poll-web

## Survey updates

To update the survey, follow this process.

 * Open the [Survey Creator](https://surveyjs.io/create-survey).
 * In the survey properties, change "Cookie name (to disable run survey two times locally)" to a unique value (e.g. `fotw-2019-01-26`). This value **must** be unique for every distinct survey that collects results.
 * Create your new survey.
 * Click the "JSON Editor" tab at the top of the Survey Creator.
 * Copy the JSON and replace the defintion [here](https://github.com/diy-ejuice/diy-poll-web/blob/master/src/pages/Survey.js#L21).
