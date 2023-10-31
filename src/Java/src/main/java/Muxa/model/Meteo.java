package Muxa.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Muxa.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Meteo
 */
@Entity(name = "IISMuxaMeteo")
@Table(schema = "public", name = "Meteo")
public class Meteo {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Широта")
    private Double широта;

    @Column(name = "Название")
    private String название;

    @Column(name = "Местоположение")
    private String местоположение;

    @Column(name = "IDИдентификатор")
    private Integer idидентификатор;

    @Column(name = "Долгота")
    private Double долгота;

    @Column(name = "ТекущаяТемп")
    private Double текущаятемп;

    @Column(name = "Влажность")
    private Double влажность;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "City")
    @Convert("City")
    @Column(name = "City", length = 16, unique = true, nullable = false)
    private UUID _cityid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "City", insertable = false, updatable = false)
    private City city;


    public Meteo() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getШирота() {
      return широта;
    }

    public void setШирота(Double широта) {
      this.широта = широта;
    }

    public String getНазвание() {
      return название;
    }

    public void setНазвание(String название) {
      this.название = название;
    }

    public String getМестоположение() {
      return местоположение;
    }

    public void setМестоположение(String местоположение) {
      this.местоположение = местоположение;
    }

    public Integer getIDИдентификатор() {
      return idидентификатор;
    }

    public void setIDИдентификатор(Integer idидентификатор) {
      this.idидентификатор = idидентификатор;
    }

    public Double getДолгота() {
      return долгота;
    }

    public void setДолгота(Double долгота) {
      this.долгота = долгота;
    }

    public Double getТекущаяТемп() {
      return текущаятемп;
    }

    public void setТекущаяТемп(Double текущаятемп) {
      this.текущаятемп = текущаятемп;
    }

    public Double getВлажность() {
      return влажность;
    }

    public void setВлажность(Double влажность) {
      this.влажность = влажность;
    }


}