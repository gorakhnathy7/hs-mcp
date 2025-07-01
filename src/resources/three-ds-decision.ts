// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ThreeDSDecisionAPI from './three-ds-decision';
import * as AccountsAPI from './accounts/accounts';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ThreeDSDecisionResource extends APIResource {
  /**
   * 3DS Decision - Execute
   */
  execute(
    body: ThreeDSDecisionExecuteParams,
    options?: RequestOptions,
  ): APIPromise<ThreeDSDecisionExecuteResponse> {
    return this._client.post('/three_ds_decision/execute', { body, ...options });
  }
}

export type Country =
  | 'Afghanistan'
  | 'AlandIslands'
  | 'Albania'
  | 'Algeria'
  | 'AmericanSamoa'
  | 'Andorra'
  | 'Angola'
  | 'Anguilla'
  | 'Antarctica'
  | 'AntiguaAndBarbuda'
  | 'Argentina'
  | 'Armenia'
  | 'Aruba'
  | 'Australia'
  | 'Austria'
  | 'Azerbaijan'
  | 'Bahamas'
  | 'Bahrain'
  | 'Bangladesh'
  | 'Barbados'
  | 'Belarus'
  | 'Belgium'
  | 'Belize'
  | 'Benin'
  | 'Bermuda'
  | 'Bhutan'
  | 'BoliviaPlurinationalState'
  | 'BonaireSintEustatiusAndSaba'
  | 'BosniaAndHerzegovina'
  | 'Botswana'
  | 'BouvetIsland'
  | 'Brazil'
  | 'BritishIndianOceanTerritory'
  | 'BruneiDarussalam'
  | 'Bulgaria'
  | 'BurkinaFaso'
  | 'Burundi'
  | 'CaboVerde'
  | 'Cambodia'
  | 'Cameroon'
  | 'Canada'
  | 'CaymanIslands'
  | 'CentralAfricanRepublic'
  | 'Chad'
  | 'Chile'
  | 'China'
  | 'ChristmasIsland'
  | 'CocosKeelingIslands'
  | 'Colombia'
  | 'Comoros'
  | 'Congo'
  | 'CongoDemocraticRepublic'
  | 'CookIslands'
  | 'CostaRica'
  | 'CotedIvoire'
  | 'Croatia'
  | 'Cuba'
  | 'Curacao'
  | 'Cyprus'
  | 'Czechia'
  | 'Denmark'
  | 'Djibouti'
  | 'Dominica'
  | 'DominicanRepublic'
  | 'Ecuador'
  | 'Egypt'
  | 'ElSalvador'
  | 'EquatorialGuinea'
  | 'Eritrea'
  | 'Estonia'
  | 'Ethiopia'
  | 'FalklandIslandsMalvinas'
  | 'FaroeIslands'
  | 'Fiji'
  | 'Finland'
  | 'France'
  | 'FrenchGuiana'
  | 'FrenchPolynesia'
  | 'FrenchSouthernTerritories'
  | 'Gabon'
  | 'Gambia'
  | 'Georgia'
  | 'Germany'
  | 'Ghana'
  | 'Gibraltar'
  | 'Greece'
  | 'Greenland'
  | 'Grenada'
  | 'Guadeloupe'
  | 'Guam'
  | 'Guatemala'
  | 'Guernsey'
  | 'Guinea'
  | 'GuineaBissau'
  | 'Guyana'
  | 'Haiti'
  | 'HeardIslandAndMcDonaldIslands'
  | 'HolySee'
  | 'Honduras'
  | 'HongKong'
  | 'Hungary'
  | 'Iceland'
  | 'India'
  | 'Indonesia'
  | 'IranIslamicRepublic'
  | 'Iraq'
  | 'Ireland'
  | 'IsleOfMan'
  | 'Israel'
  | 'Italy'
  | 'Jamaica'
  | 'Japan'
  | 'Jersey'
  | 'Jordan'
  | 'Kazakhstan'
  | 'Kenya'
  | 'Kiribati'
  | 'KoreaDemocraticPeoplesRepublic'
  | 'KoreaRepublic'
  | 'Kuwait'
  | 'Kyrgyzstan'
  | 'LaoPeoplesDemocraticRepublic'
  | 'Latvia'
  | 'Lebanon'
  | 'Lesotho'
  | 'Liberia'
  | 'Libya'
  | 'Liechtenstein'
  | 'Lithuania'
  | 'Luxembourg'
  | 'Macao'
  | 'MacedoniaTheFormerYugoslavRepublic'
  | 'Madagascar'
  | 'Malawi'
  | 'Malaysia'
  | 'Maldives'
  | 'Mali'
  | 'Malta'
  | 'MarshallIslands'
  | 'Martinique'
  | 'Mauritania'
  | 'Mauritius'
  | 'Mayotte'
  | 'Mexico'
  | 'MicronesiaFederatedStates'
  | 'MoldovaRepublic'
  | 'Monaco'
  | 'Mongolia'
  | 'Montenegro'
  | 'Montserrat'
  | 'Morocco'
  | 'Mozambique'
  | 'Myanmar'
  | 'Namibia'
  | 'Nauru'
  | 'Nepal'
  | 'Netherlands'
  | 'NewCaledonia'
  | 'NewZealand'
  | 'Nicaragua'
  | 'Niger'
  | 'Nigeria'
  | 'Niue'
  | 'NorfolkIsland'
  | 'NorthernMarianaIslands'
  | 'Norway'
  | 'Oman'
  | 'Pakistan'
  | 'Palau'
  | 'PalestineState'
  | 'Panama'
  | 'PapuaNewGuinea'
  | 'Paraguay'
  | 'Peru'
  | 'Philippines'
  | 'Pitcairn'
  | 'Poland'
  | 'Portugal'
  | 'PuertoRico'
  | 'Qatar'
  | 'Reunion'
  | 'Romania'
  | 'RussianFederation'
  | 'Rwanda'
  | 'SaintBarthelemy'
  | 'SaintHelenaAscensionAndTristandaCunha'
  | 'SaintKittsAndNevis'
  | 'SaintLucia'
  | 'SaintMartinFrenchpart'
  | 'SaintPierreAndMiquelon'
  | 'SaintVincentAndTheGrenadines'
  | 'Samoa'
  | 'SanMarino'
  | 'SaoTomeAndPrincipe'
  | 'SaudiArabia'
  | 'Senegal'
  | 'Serbia'
  | 'Seychelles'
  | 'SierraLeone'
  | 'Singapore'
  | 'SintMaartenDutchpart'
  | 'Slovakia'
  | 'Slovenia'
  | 'SolomonIslands'
  | 'Somalia'
  | 'SouthAfrica'
  | 'SouthGeorgiaAndTheSouthSandwichIslands'
  | 'SouthSudan'
  | 'Spain'
  | 'SriLanka'
  | 'Sudan'
  | 'Suriname'
  | 'SvalbardAndJanMayen'
  | 'Swaziland'
  | 'Sweden'
  | 'Switzerland'
  | 'SyrianArabRepublic'
  | 'TaiwanProvinceOfChina'
  | 'Tajikistan'
  | 'TanzaniaUnitedRepublic'
  | 'Thailand'
  | 'TimorLeste'
  | 'Togo'
  | 'Tokelau'
  | 'Tonga'
  | 'TrinidadAndTobago'
  | 'Tunisia'
  | 'Turkey'
  | 'Turkmenistan'
  | 'TurksAndCaicosIslands'
  | 'Tuvalu'
  | 'Uganda'
  | 'Ukraine'
  | 'UnitedArabEmirates'
  | 'UnitedKingdomOfGreatBritainAndNorthernIreland'
  | 'UnitedStatesOfAmerica'
  | 'UnitedStatesMinorOutlyingIslands'
  | 'Uruguay'
  | 'Uzbekistan'
  | 'Vanuatu'
  | 'VenezuelaBolivarianRepublic'
  | 'Vietnam'
  | 'VirginIslandsBritish'
  | 'VirginIslandsUS'
  | 'WallisAndFutuna'
  | 'WesternSahara'
  | 'Yemen'
  | 'Zambia'
  | 'Zimbabwe';

/**
 * Enum representing the possible outcomes of the 3DS Decision Rule Engine.
 */
export type ThreeDSDecision =
  | 'no_three_ds'
  | 'challenge_requested'
  | 'challenge_preferred'
  | 'three_ds_exemption_requested_tra'
  | 'three_ds_exemption_requested_low_value'
  | 'issuer_three_ds_exemption_requested';

/**
 * Represents the response from executing a 3DS decision rule.
 */
export interface ThreeDSDecisionExecuteResponse {
  /**
   * Enum representing the possible outcomes of the 3DS Decision Rule Engine.
   */
  decision: ThreeDSDecision;
}

export interface ThreeDSDecisionExecuteParams {
  /**
   * Represents the payment data used in the 3DS decision rule.
   */
  payment: ThreeDSDecisionExecuteParams.Payment;

  /**
   * The ID of the routing algorithm to be executed.
   */
  routing_id: string;

  /**
   * Represents data about the acquirer used in the 3DS decision rule.
   */
  acquirer?: ThreeDSDecisionExecuteParams.Acquirer | null;

  /**
   * Represents data about the customer's device used in the 3DS decision rule.
   */
  customer_device?: ThreeDSDecisionExecuteParams.CustomerDevice | null;

  /**
   * Represents data about the issuer used in the 3DS decision rule.
   */
  issuer?: ThreeDSDecisionExecuteParams.Issuer | null;

  /**
   * Represents metadata about the payment method used in the 3DS decision rule.
   */
  payment_method?: ThreeDSDecisionExecuteParams.PaymentMethod | null;
}

export namespace ThreeDSDecisionExecuteParams {
  /**
   * Represents the payment data used in the 3DS decision rule.
   */
  export interface Payment {
    /**
     * The amount of the payment in minor units (e.g., cents for USD).
     */
    amount: number;

    /**
     * The three-letter ISO 4217 currency code (e.g., "USD", "EUR") for the payment
     * amount. This field is mandatory for creating a payment.
     */
    currency: AccountsAPI.Currency;
  }

  /**
   * Represents data about the acquirer used in the 3DS decision rule.
   */
  export interface Acquirer {
    country: ThreeDSDecisionAPI.Country;

    /**
     * The fraud rate associated with the acquirer.
     */
    fraud_rate?: number | null;
  }

  /**
   * Represents data about the customer's device used in the 3DS decision rule.
   */
  export interface CustomerDevice {
    device_type?: 'mobile' | 'tablet' | 'desktop' | 'gaming_console' | null;

    display_size?:
      | 'size320x568'
      | 'size375x667'
      | 'size390x844'
      | 'size414x896'
      | 'size428x926'
      | 'size768x1024'
      | 'size834x1112'
      | 'size834x1194'
      | 'size1024x1366'
      | 'size1280x720'
      | 'size1366x768'
      | 'size1440x900'
      | 'size1920x1080'
      | 'size2560x1440'
      | 'size3840x2160'
      | 'size500x600'
      | 'size600x400'
      | 'size360x640'
      | 'size412x915'
      | 'size800x1280'
      | null;

    platform?: 'web' | 'android' | 'ios' | null;
  }

  /**
   * Represents data about the issuer used in the 3DS decision rule.
   */
  export interface Issuer {
    country: ThreeDSDecisionAPI.Country;

    /**
     * The name of the issuer.
     */
    name?: string | null;
  }

  /**
   * Represents metadata about the payment method used in the 3DS decision rule.
   */
  export interface PaymentMethod {
    /**
     * Indicates the card network.
     */
    card_network: AccountsAPI.CardNetwork;
  }
}

export declare namespace ThreeDSDecisionResource {
  export {
    type Country as Country,
    type ThreeDSDecision as ThreeDSDecision,
    type ThreeDSDecisionExecuteResponse as ThreeDSDecisionExecuteResponse,
    type ThreeDSDecisionExecuteParams as ThreeDSDecisionExecuteParams,
  };
}
