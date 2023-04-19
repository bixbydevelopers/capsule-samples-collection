import console from 'console';

export default function // Main entry point
Share({ video, intentInfo, selectAppResult, $vivContext }) {
  var intentAction = intentInfo.intentAction;
  var intentType = intentInfo.intentType;
  var packageName = selectAppResult.appInfo.packageName;
  var activityName = selectAppResult.appInfo.activityName;

  var uri = 'intent:#Intent;';
  if (intentAction) {
    uri += 'action=' + intentAction + ';';
  }
  if (intentType) {
    uri += 'type=' + intentType + ';';
  }
  if (packageName != 'null') {
    uri += 'component=' + packageName;
    if (activityName != 'null') {
      uri = uri + '/' + activityName;
    }
    uri += ';';
  }
  // replace with your concept and what you'd like to share from that concept
  if (video) {
    var params = 'Shared via Bixby: ';
    if (video.url) params += video.url;
    uri += 'S.android.intent.extra.TEXT=' + params + ';';
  }
  uri += 'end';
  console.log('uri: ' + uri);
  return {
    uri: uri,
  };
}
