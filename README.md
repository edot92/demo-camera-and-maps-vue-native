sample vue native using native base , camera , maps

Specify your Google Maps API Key:
source : https://github.com/fqborges/react-native-maps/blob/master/docs/installation.md#on-ios
Add your API key to your manifest file (android/app/src/main/AndroidManifest.xml):

<application>
    <!-- You will only need to add this meta-data tag, but make sure it's a child of application -->
    <meta-data
      android:name="com.google.android.geo.API_KEY"
      android:value="Your Google maps API Key Here"/>
</application>
