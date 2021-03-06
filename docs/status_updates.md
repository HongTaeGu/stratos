# Status Updates

Weekly status updates are published here.

## 22 June 2018

This week the focus has been on creating a second Beta release of Version 2.

A large number of bugs and smaller issues have been resolved - full details here: https://github.com/cloudfoundry-incubator/stratos/releases/tag/2.0.0-beta-002.


## 15 June 2018

We are working towards a release of V2. We are now functionally complete and are working through priority 1 issues and defects.

- The release schedule is updated here - [Roadmap](roadmap.md).
- Priority 1 defects are labelled P1 - you can view them with this [Filter](https://github.com/cloudfoundry-incubator/stratos/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+label%3AP1)
- We have tagged a Beta 1 of Version 2 of Stratos today - https://github.com/cloudfoundry-incubator/stratos/releases/tag/v2.0.0-beta-001

We've been working through a large number of defects this week -

- Deploy info card shows both file and folder info [\#2351](https://github.com/cloudfoundry-incubator/stratos/issues/2351)
- App Service Instances: Modal appears off screen [\#2347](https://github.com/cloudfoundry-incubator/stratos/issues/2347)
- Users list is empty after cancel [\#2339](https://github.com/cloudfoundry-incubator/stratos/issues/2339)
- We still show large no connected CF endpoints even when you connect a metrics endpoint [\#2332](https://github.com/cloudfoundry-incubator/stratos/issues/2332)
- Connected endpoint does not show 'unregister' action [\#2321](https://github.com/cloudfoundry-incubator/stratos/issues/2321)
- Service instance page shows no 'no cf connected' warning [\#2320](https://github.com/cloudfoundry-incubator/stratos/issues/2320)
- No page header on Cloud Foundry pages when you go directly there [\#2319](https://github.com/cloudfoundry-incubator/stratos/issues/2319)
- Service Instance entity is not updated after unbinding an app [\#2317](https://github.com/cloudfoundry-incubator/stratos/issues/2317)
- Service broker card intermittently appears immediately below service summary card [\#2314](https://github.com/cloudfoundry-incubator/stratos/issues/2314)
- Select cf/org/space in create service instance stepper mentions `app` [\#2313](https://github.com/cloudfoundry-incubator/stratos/issues/2313)
- Adding a space scoped service should not show org/space selection step [\#2311](https://github.com/cloudfoundry-incubator/stratos/issues/2311)
- Front-end unit tests are unreliable in Travis [\#2308](https://github.com/cloudfoundry-incubator/stratos/issues/2308)
- Not all backend tests are run [\#2300](https://github.com/cloudfoundry-incubator/stratos/issues/2300)
- Log Stream token refresh does not work [\#2299](https://github.com/cloudfoundry-incubator/stratos/issues/2299)
- Marketplace: Service Broker card should be hidden if the broker isn't returned by API [\#2279](https://github.com/cloudfoundry-incubator/stratos/issues/2279)
- Endpoint Users are not refetched when an endpoint is reconnected as a different user. [\#2274](https://github.com/cloudfoundry-incubator/stratos/issues/2274)
- Marketplace service cards tags list fails to expand [\#2263](https://github.com/cloudfoundry-incubator/stratos/issues/2263)
- App bound service is shown in services to bind to list [\#2253](https://github.com/cloudfoundry-incubator/stratos/issues/2253)
- Error response handling is broken [\#2242](https://github.com/cloudfoundry-incubator/stratos/issues/2242)
- Investigate issue with space-scoped services being returned incorrectly by the `List Services for Space` request [\#2240](https://github.com/cloudfoundry-incubator/stratos/issues/2240)
- App Log Stream shows `Connecting....` for apps that aren't running [\#2235](https://github.com/cloudfoundry-incubator/stratos/issues/2235)
- Map Existing Routes: Sort by apps attached is broken [\#2210](https://github.com/cloudfoundry-incubator/stratos/issues/2210)
- Application: OFFLINE WHILE UPDATING state only allows the delete action. [\#2208](https://github.com/cloudfoundry-incubator/stratos/issues/2208)
- Cf/Org/Space filters are not updating on endpoint change [\#2162](https://github.com/cloudfoundry-incubator/stratos/issues/2162)
- Component effects are cropped in steppers [\#2116](https://github.com/cloudfoundry-incubator/stratos/issues/2116)
- Cloud Foundry orgs and space views contain multiple app-headers [\#2051](https://github.com/cloudfoundry-incubator/stratos/issues/2051)
- 2nd row of tabs sometimes disappears [\#2005](https://github.com/cloudfoundry-incubator/stratos/issues/2005)
- Instances tab shows Unknown when scaling \(with crashed app\) [\#2002](https://github.com/cloudfoundry-incubator/stratos/issues/2002)
- Console setup improvements \#2 [\#1974](https://github.com/cloudfoundry-incubator/stratos/issues/1974)
- Services page does not update after connecting/disconnected an SCF [\#1973](https://github.com/cloudfoundry-incubator/stratos/issues/1973)
- White bar flashes at top of page on Cloud Foundry page [\#1963](https://github.com/cloudfoundry-incubator/stratos/issues/1963)
- Show service type in service wall card [\#2315](https://github.com/cloudfoundry-incubator/stratos/issues/2315)
- Show space name in space broker card [\#2312](https://github.com/cloudfoundry-incubator/stratos/issues/2312)
- Add confirmation modals where required [\#2257](https://github.com/cloudfoundry-incubator/stratos/issues/2257)
- Add git commit id and whether user is an admin on the about page [\#2246](https://github.com/cloudfoundry-incubator/stratos/issues/2246)
- Update base images for git vulnerability CVE 2018-11235 [\#2241](https://github.com/cloudfoundry-incubator/stratos/issues/2241)
- Update service steppers following async stepper changes [\#2234](https://github.com/cloudfoundry-incubator/stratos/issues/2234)
- CF Permissions - Apply to user management [\#2226](https://github.com/cloudfoundry-incubator/stratos/issues/2226)
- CF Permissions - Apply to services [\#2225](https://github.com/cloudfoundry-incubator/stratos/issues/2225)
- CF Permissions - Apply to App Wall + Summary [\#2224](https://github.com/cloudfoundry-incubator/stratos/issues/2224)
- V1 e2e fix [\#2316](https://github.com/cloudfoundry-incubator/stratos/pull/2316) ([nwmac](https://github.com/nwmac))


## 08 June 2018

The team have been working on the following issues and PRs this week:

- Front-end unit tests are unreliable in Travis [#3208](https://github.com/cloudfoundry-incubator/stratos/issues/2308) - we're seeing a lot of problems with the front-end unit tests when running in Travis - we're continuing to dig into this issue to understand what the cause is, since this is affecting reliability of PR gate checks.

- Services permissions [#2284](https://github.com/cloudfoundry-incubator/stratos/pull/2284) - wiring the user permissions service into the Service UI to ensure users are only presented with actions that they are permitted to perform.

- Allow metrics endpoint token to be shared [#2283](https://github.com/cloudfoundry-incubator/stratos/pull/2283) - adding support for the admin user to connect to a Prometheus metrics endpoint and then make that connection available to all users. Note that non-admins can only see metrics for applications that they have permission to view.

- Show whether user is an admin on the about page [#2306](https://github.com/cloudfoundry-incubator/stratos/pull/2306) - we now indicate on the about page if the current user is an administrator of Stratos.

- Add Permissions to CF Users tables [#2291](https://github.com/cloudfoundry-incubator/stratos/pull/2291) - wired in the user permissions service into the Cloud Foundry user management UI.

- Wire in actions to app state [#2288](https://github.com/cloudfoundry-incubator/stratos/pull/2288) - actions on the application view now use the same rules as in V1 to determine which actions should be shown based on the current application state.

- Quicker e2e tests for PRs  [#2273](https://github.com/cloudfoundry-incubator/stratos/pull/2273) - changed the way e2e tests run for PRs. They will now use a quicker local deployment rather than a full deployment in docker.

- Only show add and deploy buttons when there is at least 1 connected CF [#2285](https://github.com/cloudfoundry-incubator/stratos/pull/2285) - we now only show the add and deploy buttons on the application wall when there is a Cloud Foundry available.

- Fetch cf users when not cf admin [#2282](https://github.com/cloudfoundry-incubator/stratos/pull/2282) - ensuring that we use different APIs call when the user is not an admin in order to retrieve the data to display for the user list.

- Hide service broker card if broker information isn't available [#2287](https://github.com/cloudfoundry-incubator/stratos/pull/2287) - we now hide the service broker card if we can not retrieve the broker metadata.

- Only allow password change if user has password.write scope [#2278](https://github.com/cloudfoundry-incubator/stratos/pull/2278) - user is now only presented with the option to change their password if they have permission to do so.

- Backend logging improvements [#2267](https://github.com/cloudfoundry-incubator/stratos/pull/2267) - first round of tidy up to the back-end logging, including not logging an error when verifying the user's seesion when they don't have a valid session.

- Use local fonts [#2260](https://github.com/cloudfoundry-incubator/stratos/pull/2260) - all fonts are now served up by the app itself to allow air-gapped deployment.

- Endpoint confirmation modals [#2258](https://github.com/cloudfoundry-incubator/stratos/pull/2258) - added confirmation modals when disconnecting or un-registering and endpoint.

- Added theming section to developer guide readme [#2249](https://github.com/cloudfoundry-incubator/stratos/pull/2249) - added documentation on how theming is done for Stratos.

- Update permissions when when entities are updated [#2221](https://github.com/cloudfoundry-incubator/stratos/pull/2221) - we now ensure that permissions are updated when endpoints (and other entities) are updated in Stratos.

## 01 June 2018

The team have been working on the following issues and PRs this week:

- Upgrade to Angular 6 [#2227](https://github.com/cloudfoundry-incubator/stratos/pull/2227) - Completed work and testing. Will merge early next week.

- Edit service instance from Services Wall [#2233](https://github.com/cloudfoundry-incubator/stratos/pull/2233) - Added ability to edit an existing service instance.

- E2E Tests [#1523](https://github.com/cloudfoundry-incubator/stratos/issues/1523) - Continuing to extend E2E test suite.

- Fix compression issue [#2248](https://github.com/cloudfoundry-incubator/stratos/pull/2248) - Fixed an issue when Stratos accessed a Cloud Foundry instance with gzip compression enabled. Thanks to everyone for their help with this one.

- Fix App SSH (Broken when auth and token endpoints are different) [#2250](https://github.com/cloudfoundry-incubator/stratos/pull/2250) - Fixed an issue with Application SSH for some CF deplyoments.

- Fix application issue on reload when served by backend [#2238](https://github.com/cloudfoundry-incubator/stratos/pull/2238) - Fixed an issue where refreshing the browser on application pages resulted in a 404 (when deployed via cf push)



## 25 May 2018

The team have been working on the following issues and PRs this week:

- Upgrade to Angular 6 [#2227](https://github.com/cloudfoundry-incubator/stratos/pull/2227)

- Handle async request progress/success/failure in modals [#2223](https://github.com/cloudfoundry-incubator/stratos/pull/2223) - Improving busy state and error feedback in modals - e.g. when creating an application, creating a space etc

- Service Summary tab [#2219](https://github.com/cloudfoundry-incubator/stratos/pull/2219) - add a summary tab to the view for a service, to show summary metadata

- Add support for back-end custom plugins [#2217](https://github.com/cloudfoundry-incubator/stratos/pull/2217)

- Apply user permissions to CF pages (2) [#2212](https://github.com/cloudfoundry-incubator/stratos/pull/2212) - Completion of work to wire in user permissions into the Cloud Foundry view


## 18 May 2018

The team have been working on the following issues and PRs this week:

- User permissions [#2147](https://github.com/cloudfoundry-incubator/stratos/pull/2147) - adding in the framework to control UI elements based on the user's permissions

- Apply user permissions to CF pages [#2198](https://github.com/cloudfoundry-incubator/stratos/pull/2198) - appropriately show the CF actions a user can perform based on their permissions

- Service instances view [#2074](https://github.com/cloudfoundry-incubator/stratos/issues/2074) - adding a view to show service instances

- Services Wall: Create Services instance [#2163](https://github.com/cloudfoundry-incubator/stratos/pull/2163) - adding support for creating service instances from the service marketplace view

- App Services tab: Allow user to bind a service instance [#2188](https://github.com/cloudfoundry-incubator/stratos/pull/2188)

- E2E Tests and E2E Test setup improvements [#2183](https://github.com/cloudfoundry-incubator/stratos/pull/2183)

- Add support for Angular XSRF protection [#2153](https://github.com/cloudfoundry-incubator/stratos/pull/2153) - adding support for the Angular XSRF protection mechanism

- Remove deprecated API & Add confirmation dialogs when detaching/removing service bindings [#2193](https://github.com/cloudfoundry-incubator/stratos/pull/2193)




## 11 May 2018

The work to get V2 to the same level of functionality as V1 is going well and we're nearing completion - the team have been working on the following issues and PRs this week:

- Add restart app button [#2140](https://github.com/cloudfoundry-incubator/stratos/pull/2140) - adding restart action to applications

- CF Push: Bump up memory further [#2135](https://github.com/cloudfoundry-incubator/stratos/pull/2135) - increase memory when pushing to work around the memory-hungry Angular compiler

- Service instances view [#2074](https://github.com/cloudfoundry-incubator/stratos/issues/2074) - adding a view to show service instances

- User permissions [#2147](https://github.com/cloudfoundry-incubator/stratos/pull/2147) - adding in the framework to control UI elements based on the user's permissions

- Customizations [#2133](https://github.com/cloudfoundry-incubator/stratos/pull/2133) - initial support for customizing Stratos (theme etc)

- E2E Tests [#1523](https://github.com/cloudfoundry-incubator/stratos/issues/1523) - putting in place the E2E framework for V2, getting this working in Travis and porting over the V1 Endpoints tests.

- Delete App should show dependencies and allow optional deletion [#2044](https://github.com/cloudfoundry-incubator/stratos/pull/2044) - when deleting an application the user is shown the application dependencies (routes, service instances) and is able to delete these with the application or leave them in place for use by other applications

- Cloud Foundry: Manage Users [#1541](https://github.com/cloudfoundry-incubator/stratos/issues/1541) - re-introducing the equivalent features that V1 has allowing user to manage user roles across Cloud Foundry

## 4 May 2018

The team have been working on the following issues and PRs this week:

- E2E Tests [#1523](https://github.com/cloudfoundry-incubator/stratos/issues/1523) - putting in place the E2E framework for V2, getting this working in Travis and porting over the V1 Endpoints tests.

- Delete App should show dependencies and allow optional deletion [#2044](https://github.com/cloudfoundry-incubator/stratos/pull/2044) - when deleting an application the user is shown the application dependencies (routes, service instances) and is able to delete these with the application or leave them in place for use by other applications

- Cloud Foundry: Manage Users [#1541](https://github.com/cloudfoundry-incubator/stratos/issues/1541) - re-introducing the equivalent features that V1 has allowing user to manage user roles across Cloud Foundry

- Implement Create Service Instance [#2043](https://github.com/cloudfoundry-incubator/stratos/issues/2043) - adding support for creating service instances

- Service Instance creation: Support space-scoped broker provided plans [#2111](https://github.com/cloudfoundry-incubator/stratos/pull/2111)

- Make Service Instance creation wizard service plan visibility aware [#2109](https://github.com/cloudfoundry-incubator/stratos/pull/2109)

- Return better error information from API passthroughs [#2084](https://github.com/cloudfoundry-incubator/stratos/pull/2085)

## 27 April 2018

The team have been working on the following issues this week:

- GitHub tab/deploy updates [#2067](https://github.com/cloudfoundry-incubator/stratos/issues/2067) - When deploying an application from GitHub, we now allow the user to select a commit from their selected branch. When viewing the GitHub tab of an application, the user can see the list of commits and update the application from a different commit on the branch.

- Deploy App: Add support for an archive file or local folder  [#2040](https://github.com/cloudfoundry-incubator/stratos/issues/2040) - In addition to Git deployment, users can now browse to a local application archive file or folder and deploy using that.

- User Profile: Implement edit and password change as per V1 [#2062](https://github.com/cloudfoundry-incubator/stratos/issues/2040) - Users can now edit their profile metadata and change their password.

- Create & List Service Instances - [#2086](https://github.com/cloudfoundry-incubator/stratos/pull/2086) - adding the ability to view and create Service Instances.

- Delete App should show dependencies and allow optional deletion [#2044](https://github.com/cloudfoundry-incubator/stratos/pull/2044) - when deleting and application the user is shown the application dependencies(routes, service instances) and is able to delete these with the application or leave them in place for use by other applications

- Cloud Foundry: Manage Users [#1541](https://github.com/cloudfoundry-incubator/stratos/issues/1541) - re-introducing the equivalent features that V1 has allowing user to manage user roles across Cloud Foundry
