import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Home as HomeView,
  Landing as LandingView,
  Login as LoginView,
  DietaryPreferences as DietaryPreferencesView,
  DisplayProduct as DisplayProductView,
  DisplaySearch as DisplaySearchView,
  SearchResults as SearchResultsView,
  UserFavourites as UserFavouritesView,
  Dashboard as DashboardView,
  ProductList as ProductListView,
  UserList as UserListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView,
  Loading as LoadingView,
  PopularProducts as PopularProductsView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/landing"
      />
      <RouteWithLayout
        component={LandingView}
        exact
        layout={MainLayout}
        path="/landing"
      />
      <RouteWithLayout
        component={DietaryPreferencesView}
        exact
        layout={MainLayout}
        path="/dietary-preferences"
      />
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MinimalLayout}
        path="/home"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={LoadingView}
        exact
        layout={MainLayout}
        path="/loading"
      />
      <RouteWithLayout
        component={DisplayProductView}
        exact
        layout={MainLayout}
        path="/display-product"
      />
      <RouteWithLayout
        component={SearchResultsView}
        exact
        layout={MainLayout}
        path="/search-results"
      />
      <RouteWithLayout
        component={UserFavouritesView}
        exact
        layout={MainLayout}
        path='/user-favourites'
      />
      <RouteWithLayout
        component={PopularProductsView}
        exact
        layout={MainLayout}
        path='/popular-products'
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path="/products"
      />
      <RouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path="/typography"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/icons"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={LoginView}
        exact
        layout={MinimalLayout}
        path="/login"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
