﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Muxa
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Метеостанция.
    /// </summary>
    // *** Start programmer edit section *** (Meteo CustomAttributes)

    // *** End programmer edit section *** (Meteo CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("MeteoE", new string[] {
            "Широта as \'Широта\'",
            "Название as \'Название\'",
            "Местоположение as \'Местоположение\'",
            "IDИдентификатор as \'I d идентификатор\'",
            "Долгота as \'Долгота\'",
            "ТекущаяТемп as \'Текущая темп\'",
            "Влажность as \'Влажность\'",
            "City as \'City\'",
            "City.Название as \'Название\'"}, Hidden=new string[] {
            "City.Название"})]
    [MasterViewDefineAttribute("MeteoE", "City", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Название")]
    [View("MeteoL", new string[] {
            "Широта as \'Широта\'",
            "Название as \'Название\'",
            "Местоположение as \'Местоположение\'",
            "IDИдентификатор as \'I d идентификатор\'",
            "Долгота as \'Долгота\'",
            "ТекущаяТемп as \'Текущая темп\'",
            "Влажность as \'Влажность\'",
            "City.Название as \'Название\'"})]
    [View("МетеостанцияE", new string[] {
            "Название as \'Название\'",
            "IDИдентификатор as \'I d идентификатор\'",
            "Местоположение as \'Местоположение\'",
            "Широта as \'Широта\'",
            "Долгота as \'Долгота\'",
            "Влажность as \'Влажность\'"})]
    [View("МетеостанцияL", new string[] {
            "Название as \'Название\'",
            "IDИдентификатор as \'I d идентификатор\'",
            "Местоположение as \'Местоположение\'",
            "Широта as \'Широта\'",
            "Долгота as \'Долгота\'",
            "Влажность as \'Влажность\'"})]
    public class Meteo : ICSSoft.STORMNET.DataObject
    {
        
        private double fШирота;
        
        private string fНазвание;
        
        private string fМестоположение;
        
        private int fIDИдентификатор;
        
        private double fДолгота;
        
        private double fТекущаяТемп;
        
        private double fВлажность;
        
        private IIS.Muxa.City fCity;
        
        // *** Start programmer edit section *** (Meteo CustomMembers)

        // *** End programmer edit section *** (Meteo CustomMembers)

        
        /// <summary>
        /// IDИдентификатор.
        /// </summary>
        // *** Start programmer edit section *** (Meteo.IDИдентификатор CustomAttributes)

        // *** End programmer edit section *** (Meteo.IDИдентификатор CustomAttributes)
        public virtual int IDИдентификатор
        {
            get
            {
                // *** Start programmer edit section *** (Meteo.IDИдентификатор Get start)

                // *** End programmer edit section *** (Meteo.IDИдентификатор Get start)
                int result = this.fIDИдентификатор;
                // *** Start programmer edit section *** (Meteo.IDИдентификатор Get end)

                // *** End programmer edit section *** (Meteo.IDИдентификатор Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Meteo.IDИдентификатор Set start)

                // *** End programmer edit section *** (Meteo.IDИдентификатор Set start)
                this.fIDИдентификатор = value;
                // *** Start programmer edit section *** (Meteo.IDИдентификатор Set end)

                // *** End programmer edit section *** (Meteo.IDИдентификатор Set end)
            }
        }
        
        /// <summary>
        /// Влажность.
        /// </summary>
        // *** Start programmer edit section *** (Meteo.Влажность CustomAttributes)

        // *** End programmer edit section *** (Meteo.Влажность CustomAttributes)
        public virtual double Влажность
        {
            get
            {
                // *** Start programmer edit section *** (Meteo.Влажность Get start)

                // *** End programmer edit section *** (Meteo.Влажность Get start)
                double result = this.fВлажность;
                // *** Start programmer edit section *** (Meteo.Влажность Get end)

                // *** End programmer edit section *** (Meteo.Влажность Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Meteo.Влажность Set start)

                // *** End programmer edit section *** (Meteo.Влажность Set start)
                this.fВлажность = value;
                // *** Start programmer edit section *** (Meteo.Влажность Set end)

                // *** End programmer edit section *** (Meteo.Влажность Set end)
            }
        }
        
        /// <summary>
        /// Долгота.
        /// </summary>
        // *** Start programmer edit section *** (Meteo.Долгота CustomAttributes)

        // *** End programmer edit section *** (Meteo.Долгота CustomAttributes)
        public virtual double Долгота
        {
            get
            {
                // *** Start programmer edit section *** (Meteo.Долгота Get start)

                // *** End programmer edit section *** (Meteo.Долгота Get start)
                double result = this.fДолгота;
                // *** Start programmer edit section *** (Meteo.Долгота Get end)

                // *** End programmer edit section *** (Meteo.Долгота Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Meteo.Долгота Set start)

                // *** End programmer edit section *** (Meteo.Долгота Set start)
                this.fДолгота = value;
                // *** Start programmer edit section *** (Meteo.Долгота Set end)

                // *** End programmer edit section *** (Meteo.Долгота Set end)
            }
        }
        
        /// <summary>
        /// Местоположение.
        /// </summary>
        // *** Start programmer edit section *** (Meteo.Местоположение CustomAttributes)

        // *** End programmer edit section *** (Meteo.Местоположение CustomAttributes)
        [StrLen(255)]
        public virtual string Местоположение
        {
            get
            {
                // *** Start programmer edit section *** (Meteo.Местоположение Get start)

                // *** End programmer edit section *** (Meteo.Местоположение Get start)
                string result = this.fМестоположение;
                // *** Start programmer edit section *** (Meteo.Местоположение Get end)

                // *** End programmer edit section *** (Meteo.Местоположение Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Meteo.Местоположение Set start)

                // *** End programmer edit section *** (Meteo.Местоположение Set start)
                this.fМестоположение = value;
                // *** Start programmer edit section *** (Meteo.Местоположение Set end)

                // *** End programmer edit section *** (Meteo.Местоположение Set end)
            }
        }
        
        /// <summary>
        /// Название.
        /// </summary>
        // *** Start programmer edit section *** (Meteo.Название CustomAttributes)

        // *** End programmer edit section *** (Meteo.Название CustomAttributes)
        [StrLen(255)]
        public virtual string Название
        {
            get
            {
                // *** Start programmer edit section *** (Meteo.Название Get start)

                // *** End programmer edit section *** (Meteo.Название Get start)
                string result = this.fНазвание;
                // *** Start programmer edit section *** (Meteo.Название Get end)

                // *** End programmer edit section *** (Meteo.Название Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Meteo.Название Set start)

                // *** End programmer edit section *** (Meteo.Название Set start)
                this.fНазвание = value;
                // *** Start programmer edit section *** (Meteo.Название Set end)

                // *** End programmer edit section *** (Meteo.Название Set end)
            }
        }
        
        /// <summary>
        /// ТекущаяТемп.
        /// </summary>
        // *** Start programmer edit section *** (Meteo.ТекущаяТемп CustomAttributes)

        // *** End programmer edit section *** (Meteo.ТекущаяТемп CustomAttributes)
        public virtual double ТекущаяТемп
        {
            get
            {
                // *** Start programmer edit section *** (Meteo.ТекущаяТемп Get start)

                // *** End programmer edit section *** (Meteo.ТекущаяТемп Get start)
                double result = this.fТекущаяТемп;
                // *** Start programmer edit section *** (Meteo.ТекущаяТемп Get end)

                // *** End programmer edit section *** (Meteo.ТекущаяТемп Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Meteo.ТекущаяТемп Set start)

                // *** End programmer edit section *** (Meteo.ТекущаяТемп Set start)
                this.fТекущаяТемп = value;
                // *** Start programmer edit section *** (Meteo.ТекущаяТемп Set end)

                // *** End programmer edit section *** (Meteo.ТекущаяТемп Set end)
            }
        }
        
        /// <summary>
        /// Широта.
        /// </summary>
        // *** Start programmer edit section *** (Meteo.Широта CustomAttributes)

        // *** End programmer edit section *** (Meteo.Широта CustomAttributes)
        public virtual double Широта
        {
            get
            {
                // *** Start programmer edit section *** (Meteo.Широта Get start)

                // *** End programmer edit section *** (Meteo.Широта Get start)
                double result = this.fШирота;
                // *** Start programmer edit section *** (Meteo.Широта Get end)

                // *** End programmer edit section *** (Meteo.Широта Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Meteo.Широта Set start)

                // *** End programmer edit section *** (Meteo.Широта Set start)
                this.fШирота = value;
                // *** Start programmer edit section *** (Meteo.Широта Set end)

                // *** End programmer edit section *** (Meteo.Широта Set end)
            }
        }
        
        /// <summary>
        /// Метеостанция.
        /// </summary>
        // *** Start programmer edit section *** (Meteo.City CustomAttributes)

        // *** End programmer edit section *** (Meteo.City CustomAttributes)
        [PropertyStorage(new string[] {
                "City"})]
        [NotNull()]
        public virtual IIS.Muxa.City City
        {
            get
            {
                // *** Start programmer edit section *** (Meteo.City Get start)

                // *** End programmer edit section *** (Meteo.City Get start)
                IIS.Muxa.City result = this.fCity;
                // *** Start programmer edit section *** (Meteo.City Get end)

                // *** End programmer edit section *** (Meteo.City Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Meteo.City Set start)

                // *** End programmer edit section *** (Meteo.City Set start)
                this.fCity = value;
                // *** Start programmer edit section *** (Meteo.City Set end)

                // *** End programmer edit section *** (Meteo.City Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "MeteoE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View MeteoE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("MeteoE", typeof(IIS.Muxa.Meteo));
                }
            }
            
            /// <summary>
            /// "MeteoL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View MeteoL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("MeteoL", typeof(IIS.Muxa.Meteo));
                }
            }
            
            /// <summary>
            /// "МетеостанцияE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View МетеостанцияE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("МетеостанцияE", typeof(IIS.Muxa.Meteo));
                }
            }
            
            /// <summary>
            /// "МетеостанцияL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View МетеостанцияL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("МетеостанцияL", typeof(IIS.Muxa.Meteo));
                }
            }
        }
    }
}
