# Change Log

## [2.0.0-beta-002](https://github.com/cloudfoundry-incubator/stratos/tree/2.0.0-beta-002) (2018-06-22)
[Full Changelog](https://github.com/cloudfoundry-incubator/stratos/compare/v2.0.0-beta-001...2.0.0-beta-002)

**Fixed bugs:**

- Error logged in console when reloading to app routes page [\#2493](https://github.com/cloudfoundry-incubator/stratos/issues/2493)
- App instance error after un-mapping a route [\#2475](https://github.com/cloudfoundry-incubator/stratos/issues/2475)
- Confirm Dialog needs margin to the left of the icon [\#2474](https://github.com/cloudfoundry-incubator/stratos/issues/2474)
- Create Service Instance: Errors not handled [\#2471](https://github.com/cloudfoundry-incubator/stratos/issues/2471)
- UI stops working [\#2468](https://github.com/cloudfoundry-incubator/stratos/issues/2468)
- Create service instance from marketplace with 1 org and 1 space - can not proceed [\#2467](https://github.com/cloudfoundry-incubator/stratos/issues/2467)
- Org card is empty - shows -/- [\#2462](https://github.com/cloudfoundry-incubator/stratos/issues/2462)
- Error after disconnecting an endpoint [\#2460](https://github.com/cloudfoundry-incubator/stratos/issues/2460)
- All endpoints are incorrectly shown to be in error state [\#2459](https://github.com/cloudfoundry-incubator/stratos/issues/2459)
- Endpoint warning message - icon is not aligned correctly [\#2457](https://github.com/cloudfoundry-incubator/stratos/issues/2457)
- When one CF fails, we don't show data for those that succeed. [\#2456](https://github.com/cloudfoundry-incubator/stratos/issues/2456)
- Exception on create space stepper when you cancel out [\#2454](https://github.com/cloudfoundry-incubator/stratos/issues/2454)
- Error when creating a Space with a space character in the name [\#2451](https://github.com/cloudfoundry-incubator/stratos/issues/2451)
- Users tab loads indefinitely if a non-admin user access it [\#2382](https://github.com/cloudfoundry-incubator/stratos/issues/2382)
- Fix backend error logging [\#2484](https://github.com/cloudfoundry-incubator/stratos/pull/2484)
- Fix for panic when res is not set in error logging [\#2441](https://github.com/cloudfoundry-incubator/stratos/pull/2441)

**Closed issues:**

- Cf in Cf/org/space should be all caps [\#2447](https://github.com/cloudfoundry-incubator/stratos/issues/2447)
- Firefox rendering - focus border on drop-down menu items [\#2446](https://github.com/cloudfoundry-incubator/stratos/issues/2446)
- Add No Javascript message [\#2444](https://github.com/cloudfoundry-incubator/stratos/issues/2444)
- Users Permissions: Removing the last role \(Org User\) results in an exception [\#2438](https://github.com/cloudfoundry-incubator/stratos/issues/2438)
- Users Permissions: Assigning a role to a user that has none results in an exception [\#2428](https://github.com/cloudfoundry-incubator/stratos/issues/2428)
- Create ChangeLog for 2.0.0 Beta 1 [\#2421](https://github.com/cloudfoundry-incubator/stratos/issues/2421)
- Redeploy does not update commit id of deployment [\#2419](https://github.com/cloudfoundry-incubator/stratos/issues/2419)
- Exception thrown when adding space to empty org [\#2418](https://github.com/cloudfoundry-incubator/stratos/issues/2418)
- Warn if cookie domain does not match Stratos URL [\#2414](https://github.com/cloudfoundry-incubator/stratos/issues/2414)
- Add commit SHA to version when built for Kubernetes/Docker Compose [\#2410](https://github.com/cloudfoundry-incubator/stratos/issues/2410)
- Investigate permission bug [\#2408](https://github.com/cloudfoundry-incubator/stratos/issues/2408)

**Merged pull requests:**

- Build-args file should be JSON [\#2503](https://github.com/cloudfoundry-incubator/stratos/pull/2503)
- Provide Create Service Instance its own CfOrgSpaceDataService instance [\#2501](https://github.com/cloudfoundry-incubator/stratos/pull/2501)
- Fix smaller UI issues [\#2499](https://github.com/cloudfoundry-incubator/stratos/pull/2499)
- Ensure requests to multiple endpoints continue if one fails [\#2498](https://github.com/cloudfoundry-incubator/stratos/pull/2498)
- Deal with non CF Jetstream failed requests [\#2497](https://github.com/cloudfoundry-incubator/stratos/pull/2497)
- Show users without usernames [\#2496](https://github.com/cloudfoundry-incubator/stratos/pull/2496)
- Add SSO Login notes [\#2495](https://github.com/cloudfoundry-incubator/stratos/pull/2495)
- Ensure we only raise internal errors on fetch api requests [\#2494](https://github.com/cloudfoundry-incubator/stratos/pull/2494)
-  Fix failure to update commit info on redeploy [\#2492](https://github.com/cloudfoundry-incubator/stratos/pull/2492)
- SSO Login Support [\#2491](https://github.com/cloudfoundry-incubator/stratos/pull/2491)
- Fix issue timing issue resulting in  invalid Space Service request [\#2489](https://github.com/cloudfoundry-incubator/stratos/pull/2489)
- Fixed exception after unmapping routes [\#2488](https://github.com/cloudfoundry-incubator/stratos/pull/2488)
- Improved fix for exception on org screen after fresh load on create space [\#2487](https://github.com/cloudfoundry-incubator/stratos/pull/2487)
- Center align icon and align text to it [\#2485](https://github.com/cloudfoundry-incubator/stratos/pull/2485)
- Fix layout on summary pages [\#2482](https://github.com/cloudfoundry-incubator/stratos/pull/2482)
- Service Catalog UI Tweaks [\#2481](https://github.com/cloudfoundry-incubator/stratos/pull/2481)
- Fix location of Dockerfile [\#2480](https://github.com/cloudfoundry-incubator/stratos/pull/2480)
- Support OAuth login to console - V2 [\#2479](https://github.com/cloudfoundry-incubator/stratos/pull/2479)
- Fix error shown when cancelling out of a freshly loaded create space stepper [\#2478](https://github.com/cloudfoundry-incubator/stratos/pull/2478)
- Fix unit tests [\#2476](https://github.com/cloudfoundry-incubator/stratos/pull/2476)
- Users tables: Only show org/space name in pills when needed [\#2443](https://github.com/cloudfoundry-incubator/stratos/pull/2443)
- Update v2 info on readme, fix typo in roadmap doc [\#2442](https://github.com/cloudfoundry-incubator/stratos/pull/2442)
- Fix issue where space count is wrong after deleting a space [\#2439](https://github.com/cloudfoundry-incubator/stratos/pull/2439)
- Update the connected user roles section of store on roles change [\#2435](https://github.com/cloudfoundry-incubator/stratos/pull/2435)
- Fix list state \(deleting/etc\) [\#2434](https://github.com/cloudfoundry-incubator/stratos/pull/2434)
- Fix exception when a space is added to an empty org [\#2433](https://github.com/cloudfoundry-incubator/stratos/pull/2433)
- Add back in Cookie Domain support [\#2432](https://github.com/cloudfoundry-incubator/stratos/pull/2432)
- Fix exception thrown when only assign an org user role [\#2430](https://github.com/cloudfoundry-incubator/stratos/pull/2430)
- Fix pagination of space level routes and service instance tables [\#2429](https://github.com/cloudfoundry-incubator/stratos/pull/2429)
- Disable removal of `org user` role if user has others [\#2427](https://github.com/cloudfoundry-incubator/stratos/pull/2427)
- V2 Beta 1 Change Log [\#2423](https://github.com/cloudfoundry-incubator/stratos/pull/2423)
- Display commit SHA/ Release tag in the About page [\#2416](https://github.com/cloudfoundry-incubator/stratos/pull/2416)
- Show an overlay and deleting message when deleting from a card or table action. [\#2415](https://github.com/cloudfoundry-incubator/stratos/pull/2415)
- Harden API error handling in case string is returned [\#2413](https://github.com/cloudfoundry-incubator/stratos/pull/2413)
- Table loading init [\#2412](https://github.com/cloudfoundry-incubator/stratos/pull/2412)
- Fix errors when multiple cf's are connected as both admin and non-admin users [\#2409](https://github.com/cloudfoundry-incubator/stratos/pull/2409)
- Fix and improve backend error handling with passthrough [\#2407](https://github.com/cloudfoundry-incubator/stratos/pull/2407)
- Dev Release pipeline: Fix console image name [\#2406](https://github.com/cloudfoundry-incubator/stratos/pull/2406)
- Fix not detecting admin user is admin scope is not stratos.admin [\#2403](https://github.com/cloudfoundry-incubator/stratos/pull/2403)
- Users Table: Restrict org/space roles and prefix space name with org... depending on depth [\#2402](https://github.com/cloudfoundry-incubator/stratos/pull/2402)
- Add support for longer timeout for mutating operations \(POST etc\) [\#2401](https://github.com/cloudfoundry-incubator/stratos/pull/2401)
- Weekly update [\#2400](https://github.com/cloudfoundry-incubator/stratos/pull/2400)
- CfOrgSpace Selector: Fix overzealous `no orgs` error message [\#2397](https://github.com/cloudfoundry-incubator/stratos/pull/2397)
- Fix a few UX issues [\#2394](https://github.com/cloudfoundry-incubator/stratos/pull/2394)
- Org space list - Deleting causes exceptions in other parts of the org page. [\#2393](https://github.com/cloudfoundry-incubator/stratos/pull/2393)
- Fix infinite user list's loading indicator when connected as user with no roles [\#2390](https://github.com/cloudfoundry-incubator/stratos/pull/2390)
- Fix TCP route creation and improve UI [\#2388](https://github.com/cloudfoundry-incubator/stratos/pull/2388)
- Add link to space for service instances [\#2384](https://github.com/cloudfoundry-incubator/stratos/pull/2384)
- Validate host/path pattern in Create Route form [\#2383](https://github.com/cloudfoundry-incubator/stratos/pull/2383)
- Enable unbind operation in space-services [\#2378](https://github.com/cloudfoundry-incubator/stratos/pull/2378)
- Add global deleting overlay for entity summary pages [\#2373](https://github.com/cloudfoundry-incubator/stratos/pull/2373)
- Fix various application deploy bugs [\#2372](https://github.com/cloudfoundry-incubator/stratos/pull/2372)

## [v2.0.0-beta-001](https://github.com/cloudfoundry-incubator/stratos/tree/v2.0.0-beta-001) (2018-06-15)
[Full Changelog](https://github.com/cloudfoundry-incubator/stratos/compare/weekmarker...v2.0.0-beta-001)

**Merged pull requests:**

- Ignore cookie domain for now [\#2399](https://github.com/cloudfoundry-incubator/stratos/pull/2399)
- Update release pipeline [\#2398](https://github.com/cloudfoundry-incubator/stratos/pull/2398)
- Fix bad error formatting on the backend [\#2392](https://github.com/cloudfoundry-incubator/stratos/pull/2392)
- Tidy up pagination key creation [\#2391](https://github.com/cloudfoundry-incubator/stratos/pull/2391)
- Fix space selection when user returns to CFOrgSpace selector [\#2389](https://github.com/cloudfoundry-incubator/stratos/pull/2389)
- Fix issue where circular reference failed to denormalize an app's space [\#2385](https://github.com/cloudfoundry-incubator/stratos/pull/2385)
- Fix env var modal exception after a service binding has been created [\#2381](https://github.com/cloudfoundry-incubator/stratos/pull/2381)
- Tidy up the bind app step [\#2380](https://github.com/cloudfoundry-incubator/stratos/pull/2380)
- Fix for App bound service is shown in services to bind to list [\#2379](https://github.com/cloudfoundry-incubator/stratos/pull/2379)
- Skip CF/Org selection when creating a space-scoped service [\#2376](https://github.com/cloudfoundry-incubator/stratos/pull/2376)
- Ensure the list paginator is shown when row is selected [\#2375](https://github.com/cloudfoundry-incubator/stratos/pull/2375)
- Setup: Add skip ssl option and improve error handling [\#2374](https://github.com/cloudfoundry-incubator/stratos/pull/2374)
- Fix app launch action display delay [\#2371](https://github.com/cloudfoundry-incubator/stratos/pull/2371)
- Ensure no endpoint message on endpoint page is endpoint type agnostic [\#2370](https://github.com/cloudfoundry-incubator/stratos/pull/2370)
- Fix duplicate deploy info when local folder [\#2368](https://github.com/cloudfoundry-incubator/stratos/pull/2368)

## [weekmarker](https://github.com/cloudfoundry-incubator/stratos/tree/weekmarker) (2018-06-11)
[Full Changelog](https://github.com/cloudfoundry-incubator/stratos/compare/1.1.0...weekmarker)

## [1.1.0](https://github.com/cloudfoundry-incubator/stratos/tree/1.1.0) (2018-04-12)
[Full Changelog](https://github.com/cloudfoundry-incubator/stratos/compare/2.0.0-dev...1.1.0)

## [2.0.0-dev](https://github.com/cloudfoundry-incubator/stratos/tree/2.0.0-dev) (2018-04-09)
[Full Changelog](https://github.com/cloudfoundry-incubator/stratos/compare/dev...2.0.0-dev)

## [dev](https://github.com/cloudfoundry-incubator/stratos/tree/dev) (2018-04-06)
[Full Changelog](https://github.com/cloudfoundry-incubator/stratos/compare/bleeding-edge...dev)

## [bleeding-edge](https://github.com/cloudfoundry-incubator/stratos/tree/bleeding-edge) (2018-03-29)
[Full Changelog](https://github.com/cloudfoundry-incubator/stratos/compare/1.0.2...bleeding-edge)

## [1.0.2](https://github.com/cloudfoundry-incubator/stratos/tree/1.0.2) (2018-03-06)
[Full Changelog](https://github.com/cloudfoundry-incubator/stratos/compare/1.0.0...1.0.2)

## [1.0.0](https://github.com/cloudfoundry-incubator/stratos/tree/1.0.0) (2018-01-09)
[Full Changelog](https://github.com/cloudfoundry-incubator/stratos/compare/0.9.9...1.0.0)

## [0.9.9](https://github.com/cloudfoundry-incubator/stratos/tree/0.9.9) (2017-12-08)
[Full Changelog](https://github.com/cloudfoundry-incubator/stratos/compare/0.9.8...0.9.9)

## [0.9.8](https://github.com/cloudfoundry-incubator/stratos/tree/0.9.8) (2017-11-23)
[Full Changelog](https://github.com/cloudfoundry-incubator/stratos/compare/0.9.7...0.9.8)

## [0.9.7](https://github.com/cloudfoundry-incubator/stratos/tree/0.9.7) (2017-11-09)
[Full Changelog](https://github.com/cloudfoundry-incubator/stratos/compare/0.9.6...0.9.7)

## [0.9.6](https://github.com/cloudfoundry-incubator/stratos/tree/0.9.6) (2017-11-01)
[Full Changelog](https://github.com/cloudfoundry-incubator/stratos/compare/0.9.5...0.9.6)

## [0.9.5](https://github.com/cloudfoundry-incubator/stratos/tree/0.9.5) (2017-09-21)
[Full Changelog](https://github.com/cloudfoundry-incubator/stratos/compare/0.9.2...0.9.5)

## [0.9.2](https://github.com/cloudfoundry-incubator/stratos/tree/0.9.2) (2017-08-21)
[Full Changelog](https://github.com/cloudfoundry-incubator/stratos/compare/0.9.1...0.9.2)

## [0.9.1](https://github.com/cloudfoundry-incubator/stratos/tree/0.9.1) (2017-08-01)
[Full Changelog](https://github.com/cloudfoundry-incubator/stratos/compare/0.9.0...0.9.1)

## [0.9.0](https://github.com/cloudfoundry-incubator/stratos/tree/0.9.0) (2017-07-27)
[Full Changelog](https://github.com/cloudfoundry-incubator/stratos/compare/s4x...0.9.0)

## [s4x](https://github.com/cloudfoundry-incubator/stratos/tree/s4x) (2017-06-06)


\* *This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)*