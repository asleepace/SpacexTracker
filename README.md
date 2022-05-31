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

## How to Use

The SpaceX Tacker is a single page\* application which will fetch and render launches automatically. To learn more about a launch, simply tap on the cell and it will display more detailed information.

You can also filter the data by rocket name or launch station by typing into the search bar (case-insensitive)!

To open the about me section tap on the SpaceX logo and a new modal will appear with the details.

If anything should fail to load either click the reload button or pull down to refresh, enjoy!

## Project Structure

The application roughyl follows the MVC paradigm with the following project strucure. The heavy lifting is done by the controllers which tie together the business logic, user interface and data together. Each directory has an `index.ts` file for easier imports.

- `App.tsx` root of the application
  - `assets` contains static image files
  - `src` contains the source code
    - `components` contains visual elements
    - `controllers` contains view controllers
    - `graphql` contains graphql logic
    - `hooks` contains react hooks
    - `interfaces` contains typescript definitions

## Design Considerations

- <b>Model View Controller (MVC)</b>: while this project doesn't strictly adhere MVC principles, the core idea is we have our modeled data (found in `./graphql/`) which is used by the controllers to populate the various components. Each element found in `./components/` is not concerned with any business logic, just data and functions that are passed as props.

- <b>Don't Repeat Yourself (DRY)</b>: the component directory is quite a bit larger than I originally expected, but the purpose of this is to break down each `ui` element into its atomic parts so that they may be re-used and make use of inheritance by composition.

- <b>Encapsulation</b>: A major theme for this implementation is encapsulation, with only items others may be concerned with exported from a file or from a directories `index.ts`. This means if it isn't exported, then it shouldn't concern the parent or caller.

- <b>Single Page Application (SPA)</b>: you may notice that there is no navigation system as I felt this would most likely be overkill, instead I opted to try and make use of the various hooks such as `useImperativeHandle` to demo my ability to comprehend react vs. implement a library.

## Unit Tests

To run unit tests navigate to the root directory and run the following command:

```bash
yarn test
```

These are very limited in scope and just check if the components render as expected.

## Troubleshooting

As mentioned above the `npx react-native run-ios` command may fail the first time, in this case open the Xcode workspace and build normally:

```bash
open ./ios/SpacexTracker.xcworkspace
```

Afterwards, this command should work normally!

https://reactnative.dev/docs/troubleshooting
