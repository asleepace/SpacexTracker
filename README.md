# SpaceX Tracker

A simple application for tracking various SpaceX launches built using [react-native](https://reactnative.dev/) and [TypeScript](https://www.typescriptlang.org/). Best viewed on the iPhone 13!

![giphy](https://user-images.githubusercontent.com/10716803/171064457-b30bfcef-359e-43da-a9ec-da8495e8d3bb.GIF)

## Prerequisites

Make sure you are using the new react-native development environment [outlined here](https://reactnative.dev/docs/next/environment-setup) along with the following:

| Software       | Version |
| -------------- | :-----: |
| Node           | 16.15.0 |
| Yarn           | 1.22.18 |
| Xcode          | 13.3.1  |
| Ruby           |  2.7.3  |
| CocoaPods      | 1.11.3  |
| React Native   | 0.68.2  |
| Android Studio |  7.0.4  |
| Java (openjdk) | 11.0.15 |

## Installation

Download and install the repository by running the following:

```bash
git clone https://github.com/asleepace/SpacexTracker.git
cd ./SpacexTracker/
yarn
cd ./ios/ && pod install && cd ..
```

## Getting Started

Start the packager by running the following command in the project root directory:

```bash
yarn start
```

To run the application on iOS (if this fails see Troubleshooting below), the first time you may need to build from XCode directly.

```bash
npx react-native run-ios
```

To run the application on Android:

```bash
npx react-native run-android
```

## Project Structure

The application roughyl follows the MVC paradigm with the following project strucure. The heavy lifting is done by the controllers which tie together the business logic, user interface and data together. Each directory has an `index.ts` file for easier imports.

- `App.tsx` root of the application
  - `./src/components` contains visual elements
  - `./src/controllers` contains view controllers
  - `./src/graphql` contains graphql logic
  - `./src/hooks` contains react hooks
  - `./src/interfaces` contains typescript definitions

## Troubleshooting

As mentioned above the `npx react-native run-ios` command may fail the first time, in this case open the Xcode workspace and build normally:

```bash
open ./ios/SpacexTracker.xcworkspace
```

Afterwards, this command should work normally!

https://reactnative.dev/docs/troubleshooting
