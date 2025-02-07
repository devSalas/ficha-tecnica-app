"use client";
import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { Table, TR, TD } from '@ag-media/react-pdf-table';
import { useTechnicalSheetStore } from "../store/technicalSheet";
// Estilos para el PDF
const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontSize: 9,
    },
    section: {
        marginBottom: 10,
        display: "flex",
        gap: 20,
        width: '100%',

    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
        textAlign: "center"
    },
    subtitle: {
        padding: 4,
        fontWeight: "bold"
    },
    subsubtile: {
        padding: 4
    },

    text: {
        marginBottom: 3,
    },
    signature: {
        marginTop: 20,
        fontSize: 12,
        fontWeight: "bold",
    },
    row: {
        flexDirection: "row",

    },
    table: {
        width: "100%",
        borderColor: "1px solid #f3f4f6",
        margin: "10px 0"
    },
    tableHeader: {
        backgroundColor: "#e5e5e5",

    },
    textBold: {
        fontWeight: "bold",
    },
    td: {
        padding: 4,
    },
    thin: {
        flexShrink: 1
    },
    grow: {
        flexGrow: 1
    },
    textArea: {
        minHeight: 50,
        padding:6
    }

});







// Componente del Documento PDF
const TechnicalReportPDF = () => {

    const {computerType,city,conclusion,customer,date,memory,observation,officeProgram,operatingSystem,problem,processor,recomendation,storage,test,user} = useTechnicalSheetStore()


    const DetallesDelEquipoData = {
        section: "I. Detalles del Equipo",
        details: [
            { key: "1.1 Tipo de Computador", value: computerType },
            { key: "1.2 Procesador", value: processor },
            { key: "1.3 Memoria", value: memory },
            { key: "1.4 Disco Duro", value: storage },
            { key: "1.5 Sistema Operativo", value: operatingSystem },
            { key: "1.6 Office", value: officeProgram },
            { key: "1.7 Usuario", value: user},
            { key: "1.8 Cliente", value: customer },
            { key: "1.9 Ciudad", value: city },
            { key: "1.10 Fecha", value: date }
        ]
    }


    return (



        <Document>
            <Page size="A4" style={styles.page}>
                {/* Título */}
                <View style={styles.section}>
                    <Text style={styles.title}>INFORME TÉCNICO</Text>
                </View>
                <View  >
                    <Text >I. Detalles del Equipo</Text>
                </View>
                {/* Detalles del Equipo */}
                <Table style={styles.table}>

                    {
                        DetallesDelEquipoData.details.map((item, index) => (
                            <TR key={index}>
                                <TD style={[styles.td, styles.tableHeader]}>{item.key}</TD>
                                <TD style={[styles.td, styles.textBold, styles.grow]}>{item.value}</TD>
                            </TR>
                        ))
                    }
                </Table >
                <View>
                    <Text>II. Diagnostico</Text>
                </View>
                <Table style={styles.table}>
                    <TR>
                        <TD style={[styles.tableHeader, styles.subsubtile]}>Problema reportado</TD>
                        <TD style={[styles.grow, styles.subsubtile]}> {problem}
                        </TD>
                    </TR>
                    <TR>
                        <TD style={[styles.tableHeader, styles.subsubtile]}>Pruebas realizadas</TD>
                    </TR>
                    <TR>
                        <TD style={styles.textArea}>
                            <View>
                                <Text>{test}</Text>
                            </View>
                        </TD>
                    </TR>
                </Table>
                {/* Solución */}
                <View>
                    <Text>III. Solución</Text>
                </View>
                <Table style={styles.table}>
                    <TR>
                        <TD style={[styles.tableHeader, styles.subsubtile]}>Conclusiones</TD>
                    </TR>
                    <TR>
                        <TD style={[styles.textArea]}>
                            <View>
                                <Text>{conclusion}</Text>
                            </View>
                        </TD>
                    </TR>
                    <TR>
                        <TD style={[styles.tableHeader, styles.subsubtile]}>Recomendaciones</TD>
                    </TR>
                    <TR>
                        <TD style={[styles.textArea]}>
                            <View>
                                <Text>{recomendation}</Text>
                            </View>
                        </TD>
                    </TR>
                </Table>
                <View>
                    <Text>IV. Observaciónes</Text>
                </View>
                <Table style={styles.table}>
                    <TR>
                        <TD style={[styles.tableHeader, styles.subsubtile]}>Otros</TD>
                    </TR>
                    <TR>
                        <TD style={[styles.textArea]}>
                            <View>
                                <Text>{observation}</Text>
                            </View>
                        </TD>
                    </TR>

                </Table>


                {/* Firma */}
                <View style={styles.signature}>
                    <Text style={{ textAlign: "center" }}>Atentamente,</Text>
                    <Text style={{ textAlign: "center" }}></Text>
                    <Text style={{ textAlign: "center", marginTop: 20, marginBottom: 10 }}>_____________________________</Text>
                    <Text style={{ textAlign: "center" }}>Especialista en Soporte Técnico</Text>
                </View>
            </Page>
        </Document>
    )
};

export default TechnicalReportPDF;
