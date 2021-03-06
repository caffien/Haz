package com.haz;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.reactnativecommunity.netinfo.NetInfoPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.rnfs.RNFSPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new NetInfoPackage(),
            new RNFetchBlobPackage(),
            new AsyncStoragePackage(),
            new VectorIconsPackage(),
            new RNFSPackage(),
            new LinearGradientPackage(),
            new RNGestureHandlerPackage(),
            new MapsPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
