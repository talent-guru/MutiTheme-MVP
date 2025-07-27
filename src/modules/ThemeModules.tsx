"use client";

import { THEME } from "../theme.config";

export const account = () => require("../theme.config").THEME.modules.account;
export const auth = () => require("../theme.config").THEME.modules.auth;
export const cart = () => require("../theme.config").THEME.modules.cart;
export const checkout = () => require("../theme.config").THEME.modules.checkout;
export const collections = () => require("../theme.config").THEME.modules.collections;
export const common = () => require("../theme.config").THEME.modules.common;
export const header = () => require("../theme.config").THEME.modules.header;
export const order = () => require("../theme.config").THEME.modules.order;
export const products = () => require("../theme.config").THEME.modules.products;
export const skeletons = () => require("../theme.config").THEME.modules.skeletons;
export const store = () => require("../theme.config").THEME.modules.store;

export const CheckoutForm = () => require("../theme.config").THEME.modules.checkout.CheckoutForm;
export const OrderTotals = () => require("../theme.config").THEME.modules.order.OrderTotals;
export const Pagination = () => require("../theme.config").THEME.modules.store.Pagination;
export const SignOutButton = () => require("../theme.config").THEME.modules.account.SignOutButton;
export const SidebarNav = () => require("../theme.config").THEME.modules.account.SidebarNav;
export const SkeletonAccountPage = () => require("../theme.config").THEME.modules.skeletons.SkeletonAccountPage;
export const UpsertAddressForm = () => require("../theme.config").THEME.modules.account.UpsertAddressForm;
export const PersonalInfoForm = () => require("../theme.config").THEME.modules.account.PersonalInfoForm;
export const RequestPasswordResetButton = () => require("../theme.config").THEME.modules.account.RequestPasswordResetButton;
export const AddressSingle = () => require("../theme.config").THEME.modules.account.AddressSingle;
export const AddressMultiple = () => require("../theme.config").THEME.modules.account.AddressMultiple;
export const DefaultShippingAddressSelect = () => require("../theme.config").THEME.modules.account.DefaultShippingAddressSelect;
export const DefaultBillingAddressSelect = () => require("../theme.config").THEME.modules.account.DefaultBillingAddressSelect;
export const ChangePasswordForm = () => require("../theme.config").THEME.modules.auth.ChangePasswordForm;
export const ForgotPasswordForm = () => require("../theme.config").THEME.modules.auth.ForgotPasswordForm;
export const LoginForm = () => require("../theme.config").THEME.modules.auth.LoginForm;
export const SubmitButton = () => require("../theme.config").THEME.modules.common.SubmitButton;
export const SignUpForm = () => require("../theme.config").THEME.modules.auth.SignUpForm;
export const SkeletonCartPage = () => require("../theme.config").THEME.modules.skeletons.SkeletonCartPage;
export const CartTemplate = () => require("../theme.config").THEME.modules.cart.CartTemplate;
export const CollectionTemplate = () => require("../theme.config").THEME.modules.collections.CollectionTemplate;
export const SkeletonOrderConfirmed = () => require("../theme.config").THEME.modules.skeletons.SkeletonOrderConfirmed;
export const OrderCompletedTemplate = () => require("../theme.config").THEME.modules.order.OrderCompletedTemplate;
export const ProductTemplate = () => require("../theme.config").THEME.modules.products.ProductTemplate;
export const SkeletonProductGrid = () => require("../theme.config").THEME.modules.skeletons.SkeletonProductGrid;
export const PaginatedProducts = () => require("../theme.config").THEME.modules.store.PaginatedProducts;
export const CollectionsSlider = () => require("../theme.config").THEME.modules.store.CollectionsSlider;
export const CheckoutSummaryWrapper = () => require("../theme.config").THEME.modules.checkout.CheckoutSummaryWrapper;
export const MobileCheckoutSummaryWrapper = () => require("../theme.config").THEME.modules.checkout.MobileCheckoutSummaryWrapper;
export const Ideal = () => require("../theme.config").THEME.modules.common.Ideal;
export const Bancontact = () => require("../theme.config").THEME.modules.common.Bancontact;
export const PayPal = () => require("../theme.config").THEME.modules.common.PayPal;
export const LoginLink = () => require("../theme.config").THEME.modules.header.LoginLink;

export const StoreTemplate = (props: any) => {
  const StoreTemplate = THEME.modules.store.StoreTemplate;
  return <StoreTemplate {...props} />;
};