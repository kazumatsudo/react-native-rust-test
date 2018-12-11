package com.react_native_rust_test;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class MainApplicationBridge extends ReactContextBaseJavaModule {
    static {
        System.loadLibrary("react_native_rust_test");
    }

    @Override
    public String getName() {
        return "MainApplicationBridge";
    }

    public MainApplicationBridge(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void sayHelloWorld(String name, Promise promise) {
        promise.resolve(helloWorld(name));
    }

    private static native String helloWorld(String seed);
}